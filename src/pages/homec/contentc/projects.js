import { decode } from 'js-base64';
import { gcookie } from '../../../utils/CookieParser';

export function Projects() {
    var alluserprojects = JSON.parse(decode(gcookie("alluserprojects__PROJECTS")));
    var rows = 4;
    var columns = 5;
    var projectBox = <div class="project-box">{
        Array.from({ length: rows }, (_, rowIndex) => (
            <div class="row" key={rowIndex}>
                {
                    Array.from({ length: columns }, (_, colIndex) => {
                        const index = rowIndex * columns + colIndex;
                        const itemName = alluserprojects[index] ? alluserprojects[index].name : "";
                        return <div class="item" key={colIndex}>{itemName}</div>;
                    })
                }
            </div>
        ))
    }</div>;
    
    return (
        <>
            {projectBox}
        </>
    );
    
                /* <div class="row">
                    <div class="item">potatoes</div>
                    <div class="item">potatoes</div>
                    <div class="item">potatoes</div>
                    <div class="item">potatoes</div>
                    <div class="item">potatoes</div>
                </div>
                <div class="row">
                    <div class="item">potatoes</div>
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                </div>
                <div class="row">
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                </div>
                <div class="row">
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                    <div class="item item-fill" />
                </div> */
}