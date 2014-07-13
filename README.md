#Textservice markdown editor

This is a very minimalistic re-implementation of the excellent [stackedit.io][0] markdown editor show case.

It resembles a service for entering text in [markdown][12] format, while getting an html preview of the result in real time.

As sugaring (resulting from experience of losing data..), everything you enter is instantly saved into [`localStorage`][17] of your browser.

##Features

These are the features used in the experiment:

* Setup / built with [grunt][13], [bower][14]
* Core technologies: [AngularJS][10] & [Polymer][11]
* the input is rendered as a stream, following the [reactive programming paradigm][15] via [RxJS][16]
* using [ACE][1] editor for the - well - editing stuff
* we're using [Pagedown][4] to convert markdown into html
* data is stored in the [`localStorage`][17] of your browser

Interestingly, this very README.md was written using this service!

##Setup

You'll need [node & npm][18], [bower][14] and [grunt][13] setup and running on your machine to try this out!

If all prerequisites are met, clone the repo to your machine:

    git clone git@github.com:streamcards/textservice.git
    cd textservice

Then install any dependency using npm and bower:

    npm install
    bower install
    
Finally, run the service:

    grunt serve
    
It's starting a web server at port `7000`, so if you hover over to `http://localhost:7000`, you should be able to start using the service right away!

###Having trouble setting up or running the service?

Please feel free to report issues right here in the GitHub issues list!

*Thanks for trying and feedback welcome!*

##More resources related to `markdown`

* [WMD][5] - another (wysiwyg) editor for markdown
* interesting [article and discussion][6] concerning markdown's future
* [Pandoc][7] - great simplistic markup generator / parser
* [What is left open by the markdown spec][8]
* [Etherpad][9] - great project, enriches md editing with collaboration features

[0]: https://stackedit.io/
[1]: http://ace.c9.io/
[2]: https://help.github.com/articles/github-flavored-markdown
[3]: https://github.com/benweet/stackedit
[4]: https://code.google.com/p/pagedown/
[5]: http://code.google.com/p/wmd/
[6]: http://blog.codinghorror.com/the-future-of-markdown/
[7]: http://johnmacfarlane.net/pandoc
[8]: http://johnmacfarlane.net/babelmark2/faq.html#what-are-some-big-questions-that-the-markdown-spec-does-not-answer
[9]: http://etherpad.org/
[10]: https://angularjs.org/
[11]: http://www.polymer-project.org/
[12]: http://daringfireball.net/projects/markdown/syntax
[13]: http://gruntjs.com/
[14]: http://bower.io/
[15]: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
[16]: https://github.com/Reactive-Extensions/RxJS
[17]: https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage
[18]: http://nodejs.org/
