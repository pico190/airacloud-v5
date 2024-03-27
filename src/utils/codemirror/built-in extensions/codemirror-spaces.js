export function spaceMarkExtension() {
  return {
    // Decorations function to add space marks to the editor
    decorations: (state) => {
      const decorations = [];
      const selection = state.selection;

      // Loop through each line in the selection
      for (let i = selection.from; i <= selection.to; i++) {
        const line = state.doc.line(i);
        const lineLength = line.length;

        // Add a space mark for each space in the line
        for (let j = 0; j < lineLength; j++) {
          if (line.charAt(j) === ' ') {
            decorations.push({
              // Position of the space mark
              from: i * lineLength + j,
              to: i * lineLength + j + 1,
              // Style of the space mark
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
