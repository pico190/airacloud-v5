import { decode } from 'js-base64';
import React, {useState} from 'react';
import {DndContext, closestCenter} from '@dnd-kit/core';
import {SortableContext, rectSortingStrategy} from '@dnd-kit/sortable';
import { Project } from 'project'
export function Projects() {

    function animation() {
        

            var boxes = document.querySelectorAll('.animation-box');
            var delay = 100;
        
            function fadeIn(element, delay) {
                setTimeout(function() {
                    element.style.opacity = 1;
                }, delay);
            }
            
            for (var i = 0; i < boxes.length; i++) {
                fadeIn(boxes[i], i * delay);
            }
        
    }

    var alluserprojects = JSON.parse(decode(localStorage.getItem("DATA__PROJECTS")));
    alluserprojects.push({name: "add", id: "add"})

        // alluserprojects.map(item => {
        //     const itemName = item.name || "";
        //     if (itemName !== "add") {
        //         const itemIconName = item.type || "txt";
        //         const itemIconSrc = `https://${window.location.host}/airaicons/${itemIconName}.svg`;
        //         const isFill = itemName === "" ? " item-fill" : "";
        //         const itemIcon = isFill.includes("item-fill") ? null : <img height="86" src={itemIconSrc} loading="lazy" alt=""/>;
        //         return (
        //             <div className={"item animation-box" + isFill} key={item.id}>
        //                 {itemIcon}
        //                 <b>{itemName}</b>
        //             </div>
        //         );
        //     } else {
        //         return (
        //             <div className="item item-fill item-add animation-box" key={item.id}>
        //                 <img height="60" src="https:xploit.men/scdn/?fluenticons&name=add" loading="lazy" alt="Crear proyecto" />
        //             </div>
        //         );
        //     }
        // });
        
    const handleDragEnd = () => {}
    return (

        <div onLoad={() => {animation();}} className="project-grid">
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={alluserprojects}
                strategy={rectSortingStrategy}
                activationConstraint={{
                    delay: 150,
                    tolerance: 5,
                }}
            >
            {
                alluserprojects.map((proyect) => (
                    <Project item={proyect} />
                ))
            }
            </SortableContext>
        </DndContext>
        </div>
    );

//     var rows = 4;
//     var columns = 5;
//     var projectBox = <div className="project-box">{
//     Array.from({ length: rows }, (_, rowIndex) => (
//         <div className="row" key={rowIndex}>
//             {
//                 Array.from({ length: columns }, (_, colIndex) => {
//                     const index = rowIndex * columns + colIndex;
//                     const item =  alluserprojects[index] || {};
//                     const itemName = item.name || "";
//                     if(itemName!=="add") {

//                         var itemIconName = item.type || "txt";
//                         var itemIcon = <img height="86" src={"https://"+window.location.host+"/airaicons/" + itemIconName + ".svg"} loading="lazy" alt=""/>;
//                         var isFill = itemName === "" ? " item-fill" : "";
//                         isFill.includes("item-fill") === true ? itemIcon = <></> : void(0);
//                         return <div className={"item" + isFill} key={colIndex}>
//                             {itemIcon}
//                             <b>{itemName}</b>
//                            </div>;
//                     } else {
//                         return (
//                             <div className="item item-fill item-add" key={colIndex}>
//                             <img height="60" src="https://xploit.men/scdn/?fluenticons&name=add" loading="lazy" alt="Crear proyecto" />
//                            </div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     ))
// }</div>;


    
                /* <div className="row">
                    <div className="item">potatoes</div>
                    <div className="item">potatoes</div>
                    <div className="item">potatoes</div>
                    <div className="item">potatoes</div>
                    <div className="item">potatoes</div>
                </div>
                <div className="row">
                    <div className="item">potatoes</div>
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                </div>
                <div className="row">
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                </div>
                <div className="row">
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                    <div className="item item-fill" />
                </div> */
}