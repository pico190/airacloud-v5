import { decode } from 'js-base64';
import React, {useState} from 'react';
import {DndContext, closestCenter} from '@dnd-kit/core';
import {SortableContext, rectSortingStrategy, arrayMove} from '@dnd-kit/sortable';
import { Project } from './project'
export function Projects() {

    var [loadedanimation, setloadedanimation] = useState(false)
    function animation() {
        
        if(!loadedanimation) {

            var boxes = document.querySelectorAll('.animation-box');
            var delay = 100;
        
            function fadeIn(element, delay) {
                setTimeout(function() {
                    element.style.opacity = 1;
                    setTimeout(function() {
                        element.classList.remove("animation-box")
                    }, 100);
                }, delay);
            }
            
            for (var i = 0; i < boxes.length; i++) {
                fadeIn(boxes[i], i * delay);
            }

            setloadedanimation(true);
        }
        
    }

    var prjscts=JSON.parse(decode(localStorage.getItem("DATA__PROJECTS")))
    prjscts.push({name: "add", id: "add"})
    var [alluserprojects, setuserprojects] = useState(prjscts)

        
    const handleDragEnd = (event) => {
        const {active, over} = event
        const oldIndex = alluserprojects.findIndex(project => project.id === active.id)
        const newIndex = alluserprojects.findIndex(project => project.id === over.id)

        const newOrder = arrayMove(alluserprojects, oldIndex, newIndex)
        setuserprojects(newOrder)

        // solicitud post
    }
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
                    delay: 250,
                    tolerance: 5,
                }}
            >
            {
                alluserprojects.map((proyect) => (
                    <Project loadedanimation={loadedanimation} item={proyect} />
                ))
            }
            </SortableContext>
        </DndContext>
        </div>
    );

}