export function SideBarSeparator() {
    class Separator extends React.Component {
        state = {
          separatorInitialized: false,
        };
      
        componentDidMount() {
          if (!this.state.separatorInitialized) {
            this.loadSeparator();
          }
        }
      
        loadSeparator() {
          const separator = document.getElementById("sb-separator");
      
          function mousedown() {
            alert("m");
          }
      
          function mouseup() {
            alert("u");
          }
      
          separator.addEventListener("mousedown", mousedown);
          separator.addEventListener("mouseup", mouseup);
      
          this.setState({
            separatorInitialized: true,
          }); // Marcamos que el separador ha sido inicializado
        }
      
        render() {
          return <div id="sb-separator" className="sb-separator" />;
        }
      }
      
}