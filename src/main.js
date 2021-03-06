import bibtexParse from 'bibtex-parse';
import renderMathInElement from 'katex/dist/contrib/auto-render'

const res = bibtexParse.entries(`
@preamble{"Reference list"}
@string{ian = "Brown, Ian"}
@string{jane = "Woods, Jane"}
%references
@inproceedings{Smith2009,
  author=jane,
  year=2009,
  month=dec,
  title={{Quantum somethings}},
  journal={Journal of {B}lah}
}
 
@book{IP:1990,
author = ian # " and " # jane,
year = {1990},
title = {Methods for Research}
}
`);
console.log(res)