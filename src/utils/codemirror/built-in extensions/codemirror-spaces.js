export function spaceMarkExtension() {
  return {
    // Add a marker to the editor
    decorations: (state) => {
      const decorations = [];
      const selection = state.selection;

      // Iterate over each line in the selection
      for (let i = selection.from; i <= selection.to; i++) {
        const line = state.doc.line(i);
        const lineLength = line.length;

        // Add a marker for each space in the line
        for (let j = 0; j < lineLength; j++) {
          if (line.charAt(j) === ' ') {
            decorations.push({
              // Marker position
              from: i * lineLength + j,
              to: i * lineLength + j + 1,
              // Marker style
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
