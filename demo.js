const displayClasses = [
  ['block', 'Default'],
  ['make_flexbox', 'Flexbox'],
  ['make_grid', 'Grid'],
  ['make_floats', 'Old-Fashiened Floats']
];

function toggleMainDisplayClasses (name) {
  let m = document.querySelector('main'),
      s = document.querySelector('#layoutinfo'),
      e = document.querySelector('#explanation');
  for (let c in classes ) {
    if (c === name ) {
      m.classList.toggle(classes[c].class, true);
      s.innerHTML=classes[c].text;
      e.innerHTML=classes[c].expl ;
    }
    else { m.classList.toggle(classes[c].class, false)}
  }
}

const classes = {
  block: {class: "make_block",
          text:"default",
          expl : `By default, each "block-level" element gets its own line on the page.  
                 The sequence of block-level elements creates the layout.  Within block level 
                 elements, other block-level elements may also exist. They will be allocated their own
                 line-within-the-line. the height of the block-level elemnt's box will generally be 
                 determined by the additive sizes of the elements it contains.`},
  flex: {class: "make_flex", text:"Flexbox",
         expl : `In this example, the <em>main</em> element has been assigned a <em>display</em> value of 
                <strong>flex</strong>. Now the positioning of <strong>main</strong>'s children is determined 
                by the flex algorithm instead.  By default, the <strong>flex-direction</strong> is set to <strong>row</strong>,
                which causes flex elements to stack up horizontally.`},
  flexcolumn: {class: "make_flex_column", text:"Flexbox with flex-direction column",
               expl: `In this example, the <em>main</em> element has been assigned a <em>display</em> value of 
                <strong>flex</strong>. Now the positioning of <strong>main</strong>'s children is determined 
                by the flex algorithm instead.  Here, we set the <strong>flex-direction</strong> is set to <strong>column</strong>,
                which causes flex elements to stack up vertically.`},
  flexreverse: {class: "make_flex_reverse", text:"Flexbox with flex-direction row-reverse",
                expl: `In this example, the <em>main</em> element has been assigned a <em>display</em> value of 
                <strong>flex</strong>. Now the positioning of <strong>main</strong>'s children is determined 
                by the flex algorithm instead.  Here, we set the <strong>flex-direction</strong> is set to <strong>column</strong>,
                which causes flex elements to stack up vertically.`},
  grid: {class: "make_grid", text:"Grid",
         expl: `In this example, the <em>main</em> element has been assigned a <em>display</em> value of 
                <strong>grid</strong>. Now the positioning of <strong>main</strong>'s children is determined 
                by the grid algorithm instead. Ths creates a two-dimensional grid of boxes into which the children can be placed.  I've actually made 
                two grids here: the direct children of main are placed in a grid with named areas, defined by the <strong>grid-template-areas</strong> CSS property; the children "claim" an area with the <strong>grid-area</strong> property. 
                But there's another grid <em>inside</em> that one. <strong>Article</strong> is also set to <strong>display: grid</strong>, so its children are placed in the grid as well.
                the grid in article uses <strong>unnamed grid boxes</strong> set using <strong>grid-template-rows and grid-template-columns</strong>,flex and the children are placed with the <strong>grid-column</strong>
                property.  It's a lot to keep track of, but it will soon start to set in as you work with it. `},
  float: {class: "make_float", text:"default"}
  
};

