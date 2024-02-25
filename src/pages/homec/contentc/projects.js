import { decode } from 'js-base64';
import { gcookie } from '../../../utils/CookieParser';

export function Projects() {
    var alluserprojects = JSON.parse(decode(gcookie("DATA__PROJECTS")));
    alluserprojects.push({name: "add"})
    var rows = 4;
    var columns = 5;
    var projectBox = <div class="project-box">{
    Array.from({ length: rows }, (_, rowIndex) => (
        <div class="row" key={rowIndex}>
            {
                Array.from({ length: columns }, (_, colIndex) => {
                    const index = rowIndex * columns + colIndex;
                    const item =  alluserprojects[index] || {};
                    const itemName = item.name || "";
                    if(itemName!=="add") {

                        var itemIconName = item.type || "txt";
                        var itemIcon = <img height="86" src={"https://"+window.location.host+"/airaicons/" + itemIconName + ".svg"} loading="lazy" alt=""/>;
                        var isFill = itemName === "" ? " item-fill" : "";
                        isFill.includes("item-fill") === true ? itemIcon = <></> : void(0);
                        return <div class={"item" + isFill} key={colIndex}>
                            {itemIcon}
                            <b>{itemName}</b>
                           </div>;
                    } else {
                        return (
                            <div class="item item-fill item-add" key={colIndex}>
                            <img height="60" src="https://xploit.men/scdn/?fluenticons&name=add" loading="lazy" alt="Crear proyecto" />
                           </div>
                        )
                    }
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