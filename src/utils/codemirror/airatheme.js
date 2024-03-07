import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

function cssvar(name) {
    return 'var(--cm-'+name+')'
}

export const airatheme = createTheme({
    dark: 'dark',
    settings: {
      background:             cssvar("bg"),
      backgroundImage:        cssvar("bg-img"),
      foreground:             cssvar("foreground"),
      caret:                  cssvar("foreground"),
      selection:              cssvar("selection"),
      selectionMatch:         cssvar("selection-match"),
      gutterBackground:       cssvar("gutter-bg"),
      gutterForeground:       cssvar("gutter-fg"),
      gutterBorder:           cssvar("gutter-border"),
      gutterActiveForeground: cssvar("gutter-active-foreground"),
      lineHighlight:          cssvar("lineHighlight"),
    },
    styles: [
      { tag: t.content, color: cssvar("content") },

      { tag: t.comment,      color: cssvar("multiple-comment")  },
      { tag: t.lineComment,  color: cssvar("line-comment")  },
      { tag: t.blockComment, color: cssvar("multiple-comment")  },
      { tag: t.docComment,   color: cssvar("multiple-comment")  },

      { tag: t.name,      color: cssvar("name")  },
      { tag: t.labelName, color: cssvar("label-name") },

      { tag: t.namespace, color: cssvar("namespace") },
      { tag: t.macroName, color: cssvar("macroname") },

      { tag: t.definition(t.typeName), color: cssvar("type-definition") },
      { tag: t.typeName,               color: cssvar("type-name") },
      { tag: t.standard(t.typeName),   color: cssvar("type-standard") },

      { tag: t.tagName,             color: cssvar("tag-name-standard") },
      { tag: t.standard(t.tagName), color: cssvar("tag-name") },

      { tag: t.variableName,               color: cssvar("variable-name") },
      { tag: t.definition(t.variableName), color: cssvar("variable-name-definition") },
      { tag: t.function(t.variableName),   color: cssvar("variable-name-function") },

      { tag: t.propertyName,               color: cssvar("property-name") }, 
      { tag: t.function(t.propertyName),   color: cssvar("property-function") },
      { tag: t.definition(t.propertyName), color: cssvar("property-definition") },
      { tag: t.special(t.propertyName),    color: cssvar("property-name") },

      // HTML
      { tag: t.attributeName,  color: cssvar("attribute-name") },
      { tag: t.attributeValue, color: cssvar("attribute-value") },
      { tag: t.documentMeta,   color: cssvar("document-meta") },
      { tag: t.angleBracket,   color: cssvar("angle-bracket") },

      { tag: t.className,             color: cssvar("classname") },
      { tag: t.constant(t.className), color: cssvar("classname-constant") },

      { tag: t.string,            color: cssvar("string") },
      { tag: t.special(t.string), color: cssvar("string-special") },
      { tag: t.docString,         color: cssvar("string") },
      { tag: t.literal,           color: cssvar("literal") },
      { tag: t.character,         color: cssvar("character") },
      { tag: t.number,            color: cssvar("number") },
      { tag: t.integer,           color: cssvar("integer") },
      { tag: t.float,             color: cssvar("float") },
      { tag: t.bool,              color: cssvar("float") },
      { tag: t.regexp,            color: cssvar("regexp") },
      { tag: t.escape,            color: cssvar("escape") },
      { tag: t.color,             color: cssvar("color") },
      { tag: t.url,               color: cssvar("url") },
      { tag: t.keyword,           color: cssvar("keyword") },
      { tag: t.self,              color: cssvar("self") },
      { tag: t.null,              color: cssvar("null") },
      { tag: t.atom,              color: cssvar("atom") },
      { tag: t.unit,              color: cssvar("unit") },
      { tag: t.modifier,          color: cssvar("modifier") },
      { tag: t.operator,          color: cssvar("operator") },
      
      { tag: t.heading,  color: cssvar("foreground") },
      { tag: t.heading1, color: cssvar("heading1") },
      { tag: t.heading2, color: cssvar("heading2") },
      { tag: t.heading3, color: cssvar("heading3") },
      { tag: t.heading4, color: cssvar("heading4") },
      { tag: t.heading5, color: cssvar("heading5") },
      { tag: t.heading6, color: cssvar("heading6") },

      { tag: t.punctuation,   color: cssvar("punctuation") },
      { tag: t.bracket,       color: cssvar("bracket") },
      { tag: t.squareBracket, color: cssvar("square-bracket") },
      { tag: t.paren,         color: cssvar("paren") },
      
      { tag: t.contentSeparator, color: cssvar("md-content-separator") },
      { tag: t.list,             color: cssvar("md-list") },
      { tag: t.quote,            color: cssvar("md-quote") },
      { tag: t.strong,           color: cssvar("md-bold") },
      { tag: t.emphasis,         color: cssvar("md-emphasis") },
      { tag: t.link,             color: cssvar("md-link") },
      { tag: t.monospace,        color: cssvar("md-monospace") },
      { tag: t.strikethrough,    color: cssvar("md-strikethrough") },
      { tag: t.meta,             color: cssvar("md-meta") },

      { tag: t.operatorKeyword,   color: cssvar("operator-keyword") },
      { tag: t.controlKeyword,    color: cssvar("control-keyword") },
      { tag: t.definitionKeyword, color: cssvar("definition-keyword") },
      { tag: t.moduleKeyword,     color: cssvar("module-keyword") },
    ],
  });