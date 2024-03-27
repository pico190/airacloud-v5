export function spaceMarkExtension() {
  return {
    // Agregar un marcador al editor
    decorations: (state) => {
      const decorations = [];
      const selection = state.selection;

      // Recorrer cada línea de la selección
      for (let i = selection.from; i <= selection.to; i++) {
        const line = state.doc.line(i);
        const lineLength = line.length;

        // Agregar un marcador por cada espacio en la línea
        for (let j = 0; j < lineLength; j++) {
          if (line.charAt(j) === ' ') {
            decorations.push({
              // Posición del marcador
              from: i * lineLength + j,
              to: i * lineLength + j + 1,
              // Estilo del marcador
              mark: {
                attributes: {
                  class: 'space-mark',
                },
              },
            });
          }
        }
      }

      return decorations;
    },
  };
}