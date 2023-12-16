export function console_start() {
    // Title
    console.log("%cAiraCloud", "background: linear-gradient(to left, #FF9BFF, #FFCB9B); font-size: 100px; font-family: 'Atkinson Hyperlegible', 'Poppins', --sistem-ui, Arial, sans-serif; font-weight: bold; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;");
    
    // Info
    const infot = "font-family: Poppins, monospace; font-size: 20px;";
    const info = "font-family: Poppins, monospace; font-size: 15px;";
    console.group("%cInfo:", infot)
    console.log("%cEngine v5.1.69", info) 
    console.log("%cUsing %cReact", info, info+"background-color: rgba(8, 126, 164, .25); border-radius: 4px; padding-left: 3px; padding-right: 3px;") 
    console.groupEnd()
}

export function console_info() {

}