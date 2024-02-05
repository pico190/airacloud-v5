export function console_start() {
    console.clear()
    
    // Title
    console.log("%cAiraCloud", "background: linear-gradient(to left, #FF9BFF, #FFCB9B); font-size: 100px; font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-weight: bold; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;");
    
    // Info
    const infot = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 20px;";
    const info = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 15px;";
    console.group("%cInfo:", infot)
    console.log("%cEngine v5.1.69", info) 
    console.log("%cUsing %cReact", info, info+"background-color: rgba(8, 126, 164, .25); border-radius: 4px; padding-left: 3px; padding-right: 3px;") 
    console.groupEnd()
}

export function console_info(data, data2, data3, data4, data5) {
    const info = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 15px;";
    console.log("%cInfo%c | %c"+data, info+"background-color: rgba(8, 97, 163, 0.25); border-radius: 4px; padding-left: 3px; padding-right: 3px;", info+"color: rgba(255, 255, 255, .3);", info)
}

export function console_error(data, data2, data3, data4, data5) {
    const info = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 15px;";
    console.log("%cError%c | %c"+data, info+"background-color: rgba(163, 8, 8, 0.25); border-radius: 4px; padding-left: 3px; padding-right: 3px;", info+"color: rgba(255, 255, 255, .3);", info)
}

export function console_warn(data, data2, data3, data4, data5) {
    const info = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 15px;";
    console.log("%cWarning%c | %c"+data, info+"background-color: rgba(163, 126, 8, 0.25); border-radius: 4px; padding-left: 3px; padding-right: 3px;", info+"color: rgba(255, 255, 255, .3);", info)
}

export function console_group(data, data2, data3, data4, data5) {
    const info = "font-family: 'Atkinson Hyperlegible', 'Poppins', --system-ui, Arial, sans-serif; font-size: 15px;";
    console.group("%cInfo%c | %c"+data, info+"background-color: rgba(8, 97, 163, 0.25); border-radius: 4px; padding-left: 3px; padding-right: 3px;", info+"color: rgba(255, 255, 255, .3);", info)
}