import {useContext } from "react";
import Link from "./Link";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { LinkContext } from "../../context/LinkContextProvider";

const LinksList = () => {
  const {linksData, handleReorderedLink} = useContext(LinkContext)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const reorderedLinksData = [...linksData];
    const [reorderedItem] = reorderedLinksData.splice(result.source.index, 1);
    reorderedLinksData.splice(result.destination.index, 0, reorderedItem);
    handleReorderedLink(reorderedLinksData);
  };

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
                    className="mb-6 rounded-xl bg-grey-100 p-5 last-of-type:mb-[94px] select-none"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <Link
                      linkInfo={linkInfo}
                      index={index}
                      provided={provided}
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
