import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

export function Project({item}) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: item.id
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: 100,
        cursor: "grabbing"
    }

            const itemName = item.name || "";
            if (itemName !== "add") {
                const itemIconName = item.type || "txt";
                const itemIconSrc = `https://${window.location.host}/airaicons/${itemIconName}.svg`;
                const isFill = itemName === "" ? " item-fill" : "";
                const itemIcon = isFill.includes("item-fill") ? null : <img height="86" src={itemIconSrc} loading="lazy" alt=""/>;
                return (
                    <div style={style} ref={setNodeRef} {...attributes} {...listeners} className={"item animation-box" + isFill} key={item.id}>
                        {itemIcon}
                        <b>{itemName}</b>
                    </div>
                );
            } else {
                return (
                    <div className="item item-fill item-add animation-box" key={item.id}>
                        <img height="60" src="https:xploit.men/scdn/?fluenticons&name=add" loading="lazy" alt="Crear proyecto" />
                    </div>
                );
            }
    
}