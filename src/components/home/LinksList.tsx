import { useEffect, useState } from "react";
import { LinkType } from "../../types/LinkType";
import Link from "./Link";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";

interface LinksListProp {
  initialData: LinkType[];
  removeLink: (id: string) => void;
  updateLinks: (data: LinkType[]) => void
}

const LinksList = ({ initialData, removeLink, updateLinks }: LinksListProp) => {
  const [linksData, setLinksData] = useState<LinkType[]>(initialData);

  useEffect(() => {
    setLinksData(initialData);
  }, [initialData]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return; 
    }
    const reorderedLinksData = [...linksData];
    const [reorderedItem] = reorderedLinksData.splice(
      result.source.index,
      1
    ); 
    reorderedLinksData.splice(result.destination.index, 0, reorderedItem); 
    
    updateLinks(reorderedLinksData)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="linkList">
        {(provided: any) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {linksData.map((linkInfo, index) => (
              <Draggable
                key={linkInfo.id}
                draggableId={linkInfo.id}
                index={index}
              >
                {(provided) => (
                  <div
                    className="mb-6 rounded-xl bg-grey-100 p-5 last-of-type:mb-[94px]"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Link
                      linkInfo={linkInfo}
                      index={index}
                      removeLink={removeLink}
                    />
                  </div>
                )}
              </Draggable>
            ))}
             {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default LinksList;
