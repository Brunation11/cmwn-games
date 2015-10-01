var Pollinator = function() {
    var instance = this;

    /**
     * Helper to properly shuffle an array
     */
    Array.prototype.shufflePollinators = function() {
        var i = this.length, j, temp;
        if (i == 0) return this;
        while (--i) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }

        return this;
    }

    /**
     * Set this to the path where the game images are located
     */
    this.imagePath = 'content/images/findpollinators/game/';

    this.score = 0;
    this.wins = 0;

    this.data = {
        ant: {
            name: 'Texas Leaf Cutting Ant',
            desc: '<p style="font-size: 19px;margin-left: -7px;font-weight: bold;line-height:21px;width:200px;margin-top:-6px;">The Texas Leaf Cutting Ant pollinates but it also destroys some trees. They use leaves to grow the fungus that they eat.</p>',
            pollinator: true,
            x: 240,
            y: 210,
        },
        balloon: {
            name: 'Balloon',
            pollinator: false,
            x: 85,
            y: 100,
        },
        bat: {
            name: 'Bat',
            desc: '<p style="font-size: 19px;margin-left: -14px;font-weight: bold;line-height:21px;width:199px;">Bats fly at night. That\'s why we call them nocturnal. They LOVE fruit trees.</p>',
            pollinator: true,
            x: 270,
            y: 70,
        },
        boot: {
            name: 'Boot',
            pollinator: false,
            x: 85,
            y: 225,
        },
        bumblebee: {
            name: 'Bumblebee',
            desc: '<p style="font-size: 19px;margin-left: -7px;font-weight: bold;line-height:21px;">Bumblebees have long hairy tongues that help them eat nectar. Nothing like some yummy passionflower!</p>',
            pollinator: true,
            x: 395,
            y: 190,
        },
        cat: {
            name: 'Cat',
            pollinator: false,
            x: 425,
            y: 220,
        },
        dove: {
            name: 'Western White Winged Dove',
            desc: '<p style="font-size: 19px;margin-left: -9px;font-weight: bold;line-height:21px;margin-top:-7px;">Look for the White Winged Dove in the American southwest. If you see a Saguaro cactus, you\'re looking at dinner!</p>',
            pollinator: true,
            x: 125,
            y: 150,
        },
        eagle: {
            name: 'Eagle',
            pollinator: false,
            x: 515,
            y: 150,
        },
        beetle: {
            name: 'Golden Tortoise Beetle',
            desc: '<p style="font-size: 19px;margin-left: -7px;font-weight: bold;line-height:21px;width:200px;margin-top:-8px;">The Golden Tortoise Beetle turns from shiny gold to dark brown when disturbed. Are those gold spots on your morning glories?</p>',
            pollinator: true,
            x: 50,
            y: 180,
        },
        honeybee: {
            name: 'Honey Bee',
            desc: '<p style="font-size: 19px;margin-left: -18px;font-weight: bold;line-height:21px;">A Honey Bee can only sting once before it dies so be careful not to upset them. Let them enjoy the lilac bush and they will leave you alone.</p>',
            pollinator: true,
            x: 515,
            y: 190,
        },
        hummingbird: {
            name: 'Hummingbird',
            desc: '<p style="font-size: 19px;margin-left: -14px;font-weight: bold;line-height:21px;">Hummingbirds flap their wings 80 times per second! They feast on flower nectar. Yum, sound the trumpet (vine)!</p>',
            pollinator: true,
            x: 415,
            y: 20,
        },
        ladybug: {
            name: 'Lady Bug',
            desc: '<br/><p style="font-size: 19px;margin-left: -11px;font-weight: bold;line-height:21px;width:195px;margin-top:-26px;">A Ladybug is actually a beetle &mdash; so if you want to call them ladybeetles, go wild! They eat aphids which are bugs that eat roses.</p>',
            pollinator: true,
            x: 315,
            y: 220,
        },
        monarch_butterfly: {
            name: 'Monarch Butterfly',
            desc: '<p style="font-size: 19px;margin-left: -7px;font-weight: bold;line-height:21px;width:200px;">The Monarch is known as the milkweed butterfly. Milkweed and cookies anyone?</p>',
            pollinator: true,
            x: 515,
            y: 90,
        },
        moth: {
            name: 'Sphinx Moth',
            desc: '<p style="font-size: 19px;margin-left: -7px;font-weight: bold;line-height:21px;width:187px;">The Sphinx Moth is also called the hawk moth because it hovers. All the better to enjoy those apple trees!</p>',
            pollinator: true,
            x: 175,
            y: 50,
        },
        scarab_beetle: {
            name: 'Scarab Beetle',
            desc: '<p style="font-size: 19px;margin-left: -13px;font-weight: bold;line-height:21px;">The Scarab Beetle uses flowers for hiding and storing food so they pollinate by visiting multiple flowers. Find them snacking on juniper.</p>',
            pollinator: true,
            x: 145,
            y: 250,
        },
        soldierfly: {
            name: 'Soldier Fly',
            desc: '<br/><p style="font-size: 19px;margin-left: -18px;font-weight: bold;line-height:21px;margin-top:-28px">The Soldier Fly has only one set of wings and loves things that smell bad! Jack-in-the-pulpit is a great stinky lunch for him.<p>',
            pollinator: true,
            x: 205,
            y: 170,
        },
        swallowtail_butterfly: {
            name: 'Swallowtail Butterfly',
            desc: '<p style="font-size: 19px;margin-left: -15px;font-weight: bold;line-height:21px;margin-top:-8px;width:200px;">Members of the Swallowtail Butterfly family are every-<br/>where except for Antarctica. They love flowers. That\'s the story morning glory!</p>',
            pollinator: true,
            x: 315,
            y: 20,
        },

    };

    this.minutes = 0;
    this.seconds = 0;
    this.paused = false;
    this.sounds = {
        tick: {
            file: 'content/sound/clocktick.wav',
            elem: null,
            loop: true
        },
        correct: {
            file: 'content/sound/correctselection.mp3',
            elem: null,
        },
        wrong: {
            file: 'content/sound/wronganswer.wav',
            elem: null,
        },
        done: {
            file: 'content/sound/levelcompleted.mp3',
            elem: null,
        },
    };

    /**
     * Class initializer
     **/
    this.init = function() {
        var pollinators = [];
        for (var item in this.data) {
            this.data[item].pollinator && pollinators.push(item);
        }

        setInterval(instance.timer, 1000);

        this.loadSounds();

        this.initGameBoard();
        this.initDropZone();
        this.initPopUp();

        this.initHint();

        this.showPopUp({
            title: 'Do you ever wonder where baby plants come from?',
            centered: true,
            backgroundImage: 'content/images/findpollinators/img_sprout.png',
            buttons: {
                confirm: {
                    text: 'YEP!',
                    action: function() {
                        instance.showPopUp({
                            title: 'Birds and bugs, called pollinators, do the work!',
                            description: '<p style="font-weight:bold;font-size: 21px;line-height: 27px;margin-top: -15px;margin-left: -13px;">They spread the pollen from bloom to bloom and bing, boom, bang&mdash;there\'s your baby blooms!<br/>Want to find some<br/>pollinators and unlock<br/>a game?<p>',

                            backgroundImage: 'content/images/findpollinators/monarch_with_flower.png',
                            backgroundPos: '215px 158px',
                            buttons: {
                                confirm: {
                                    text: 'YES',
                                    action: function() {
                                        instance.showPopUp({
                                            description: '<span class="FindHeader">Find the pollinators</br>in the picture.</span><br/><br/><p style="font-weight:bold;font-size: 24px;line-height: 27px;margin-top: -30px;margin-left: -12px;">Drag them to match the outline<br/>below to unlock clues that will<br/>help you in level 2! Get all 7<br/> right to keep going.</p>',
                                            backgroundImage: 'content/images/findpollinators/img_ladybug_leaf.png',
                                            backgroundPos: '288px 180px',
                                            buttons: {
                                                play: {
                                                    text: 'PLAY',
                                                    action: function() {
                                                        instance.hidePopUp()
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    }
                },
            }
        }, function() {
            instance.incrementScore();
        });

        $('.border img').on('dragstart', function(event) { event.preventDefault(); });
    };

    /**
     * Load the necessary sounds in to memory
     */
    this.loadSounds = function() {
        for (var sound in this.sounds) {
            var elem = $('<audio>', {
                'name': sound + '_snd',
                'src': this.sounds[sound].file,
                'loop': (this.sounds[sound].loop) ? true : false
            }).appendTo('body');

            if (this.sounds[sound].loop) {
                elem[0].play();
            }

            this.sounds[sound].elem = elem.attr('name');
        }
    };

    /**
     * Initialize the hint button
     */
    this.initHint = function () {

        $('.hint img').css( 'cursor', 'pointer' );

        $('.hint img').hover(function() {
            $(this).attr('src', 'content/images/findpollinators/hint_on.png');
        }, function() {
            $(this).attr('src', 'content/images/findpollinators/hint.png');
        });

        $('.hint img').click(function() {
            var elem = $('td.ui-droppable').random();

            $('*[name="' + $(elem).attr('name')  + '"]').
                fadeTo(300, 0.5).
                fadeTo(300, 1).
                fadeTo(300, 0.5).
                fadeTo(300, 1);

        });
    };

    /**
     * Initialize the gameboard
     */
    this.initGameBoard = function() {
        for (var item in this.data) {
            var elem = $('<div>', {
                name: item,
                css: {
                    'background': 'url(' + this.imagePath + item + '.png)',
                    'position': 'absolute',
                    'z-index': 1000,
                    'left': this.data[item].x + 'px',
                    'top': this.data[item].y + 'px',
                }
            });

            instance.imageResize(elem);

            elem.draggable({
                start: function(event, ui) {
                    $(this).css({
                        'background': 'url(' + instance.imagePath + $(this).attr('name') + '_drag.png)',
                        'z-index': 2000,
                    });
                    instance.imageResize(this);
                },
                revert: function(x) {
                    if (!x) {
                        $(this).css({
                            'background': 'url(' + instance.imagePath + $(this).attr('name') + '.png)',
                            'z-index': 1000,
                        });
                        instance.imageResize(this);

                        $('audio[name=' + instance.sounds['wrong'].elem + ']')[0].play();

                        return true;
                    }
                },
            });
            elem.appendTo('.pollinators');
        }
    };

    /**
     * Initialize the drop zones
     */
    this.initDropZone = function() {
        var pollinators = [];
        for (var item in this.data) {
            this.data[item].pollinator && pollinators.push(item);
        }

        pollinators = pollinators.shufflePollinators();

        for (var i = 1; i <= 7; i++) {
            var elem = $('<td>', {
                name: pollinators[i],
                css: {
                    'background-image': 'url(' + this.imagePath + pollinators[i] + '_target.png)',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center',
                    'width': '85px',
                    'height': '45px',
                    'z-index': 1000,
                }
            });

            var title = $('<td>', {
                text: this.data[pollinators[i]].name,
                css: {
                    'text-align': 'center',
                    'vertical-align': 'top',
                    'z-index': 1000,
                    'line-height': '14px'
                }
            });

            elem.droppable({
                accept: '[name="' + pollinators[i] + '"]',
                drop: function(event, ui) {
                    $('.pollinators div[name=' + $(this).attr('name') + ']').remove();
                    $(this).removeClass('ui-droppable');
                    $(this).css({
                        'background-image': 'url(' + instance.imagePath + $(this).attr('name') + '_complete.png)'
                    });
                    //instance.imageResize(this);

                    $('audio[name=' + instance.sounds['correct'].elem + ']')[0].play();

                    $('<img>', {
                        'class': 'glow',
                        'src': instance.imagePath + $(this).attr('name') + '_drag.png',
                        'css': {
                            'position': 'absolute',
                            'z-index': '1000',
                            'left': instance.data[$(this).attr('name')].x,
                            'top': instance.data[$(this).attr('name')].y
                        }
                    }).appendTo('.pollinators');

                    instance.showPopUp({
                        type: 'pollinatorInfo',
                        hasClose: true,
                        title: instance.data[$(this).attr('name')].name,
                        description: instance.data[$(this).attr('name')].desc,
                        name: $(this).attr('name'),
                        image: instance.imagePath + $(this).attr('name') + '_popup.jpg'
                    }, function() {
                        instance.incrementScore();
                    });

                    /**
                    $('html').addClass('overlay');
                    var activePopup = $('.info div[data-name="' + pollinators[i] + '"]');
                    $(activePopup).addClass('visible');
                    */
                },
            });

            elem.appendTo('.dropzones table tr#drop');
            title.appendTo('.dropzones table tr#title');
        }
    };

    /**
     * Manage the timer
     **/
    this.timer = function() {
        if (instance.paused) return;

        instance.seconds++;

        if (instance.seconds >= 60) {
            instance.seconds = 0;
            instance.minutes++;

            if (instance.minutes >= 60) {
                instance.minutes = 0;
            }
        }

        var minutes = instance.minutes;
        var seconds = instance.seconds;

        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }

        var timeStr = minutes+''+seconds;

        $('.timer').empty();
        $.each(timeStr.split(''), function(i, v) {
            $('.timer').append($('<div>').text(v));
        });
    };

    /**
     * Resize image container based on background image size
     **/
    this.imageResize = function(img) {
        var imageObj = img;
        var image_url = $(imageObj).css('background-image');
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);

        // Get the pollinators image dimenstions and set height/width
        // appropriately
        if (Array.isArray(image_url) && image_url[1]) {
            image_url = image_url[1];
            var image = new Image();

            $(image).load(function() {
                $(imageObj).css('height', image.height + 'px');
                $(imageObj).css('width', image.width + 'px');
            });

            image.src = image_url;
        } else {
            console.log('[DEBUG]', 'No image found on ' + $(this).data('name'));
        }
    };

    /**
     * Increment the score of the current game
     */
    this.incrementScore = function() {
        instance.score++;

        if (instance.score >= 7) {
            instance.winGame();
        }
    };

    /**
     * Handle a winning game
     */
    this.winGame = function () {
        background.pause();
        instance.wins++;
        $('audio[name=' + instance.sounds['done'].elem + ']')[0].play();

        instance.showPopUp({
            title: 'You did it! Congratulations!',
            description: '<p style="font-size:20px;font-weight: bold;margin-top: -15px;margin-left: -16px;">Move on? Or replay to find even more pollinators?</p>',
            backgroundImage: 'content/images/findpollinators/img_butterfly_grass.png',
            backgroundPos: '50% 100px',
            centered: true,
            buttons: {
                replay: {
                    text: 'REPLAY',
                    action: function() {
                        instance.replay();
                    }
                },
                next: {
                    text: 'NEXT',
                    action: function () {
                        instance.showPopUp({
                            title: 'Yum! Time to feed<br/> the pollinators!',
                            description: '<p style="font-size:20px;font-weight: bold;margin-top: -15px;margin-left: -16px;line-height:23px;">Remember your hints from Level One.<br/> Drag your food choices up and<br> feed each pollinator!</p>',
                            backgroundImage: 'content/images/findpollinators/img_bee_daffodils.png',
                            backgroundPos: '130px 144px',
                            centered: true,
                            buttons: {
                                replay: {
                                    text: 'REPLAY',
                                    action: function () {
                                        instance.replay();
                                    }
                                },
                                next: {
                                    text: 'NEXT',
                                    action: function () {
                                        $("#putcontenthere").load("action_items/ai2.html");
                                    }
                                }//end next
                            }
                        });

                    }
                }//end next
            }
        });
    };

    /**
     * Set up the game to be replayed
     */
    this.replay = function() {
        //instance.showPopUp({
        //    title: 'Yum! Time to feed the pollinators!',
        //    description: 'Remember your hints from Level One. Drag your food choices and feed each pollinator!',
        //    backgroundImage: '/content/images/findpollinators/img_bee_daffodils.png',
        //    backgroundPos: '130px 130px',
        //    centered: true,
        //    buttons: {
        //        next: {
        //            text: 'NEXT',
                    //action: function() {
                        instance.score = 0;
                        instance.seconds = 0;
                        instance.minutes = 0;
                        $('.dropzones table tr').empty();
                        $('.pollinators div').empty();
                        $('.pollinators img.glow').remove();
                        instance.initGameBoard();
                        instance.initDropZone();
                        instance.hidePopUp();
                        background.load();
                        background.play();
                    //}
        //        }
        //    }
        //});
    };

    /**
     * Initialize the popup hotkeys
     */
    this.initPopUp = function() {
        $(document).keyup(function (e) {
            if (e.keyCode == 27 && $('html').hasClass('overlay')) {
                instance.hidePopUp();
            }
        });

        $('.popup-exit').click(function () {
            instance.hidePopUp();
        });

        $('.popup-overlay').click(function () {
            instance.hidePopUp();
        });
    };

    /**
     * Show a popup
     */
    this.showPopUp = function(obj, cb) {
        instance.popUpCallBack = cb || false;

        instance.dimGame();
        instance.buildPopUp(obj);
    };

    /**
     * Determine the popup type to build
     */
    this.buildPopUp = function(obj) {
        var popup = $('<div>', {
            'class': 'visible',
            'html': $('<div>', {
                'class': 'popup-body',
                'html': $('<div>', {
                    'class': 'border',
                    'html': $('<img>', {
                        'src': 'content/images/findpollinators/popup_border.png'
                    }),
                }),
            }).add('<div>', {
                'class': 'popup-close',
                'css': {
                    'display': (obj.hasClose) ? 'inherit' : 'none'
                },
                'html': $('<a>', {
                    'href': 'javascript:void(0)',
                    'class': 'popup-exit',
                    'html': $('<img>', {
                        'src': 'content/images/findpollinators/close.png'
                    })
                }).click(function() {
                    instance.hidePopUp();
                })
            })
        });

        var popupContent = '';
        if (obj.type == 'pollinatorInfo') {
            popupContent = instance.buildPollinatorPopUp(obj);
        } else {
            popupContent = instance.buildStatePopUp(obj);
        }

        $('.popup-body', popup).append(popupContent);

        popup.appendTo('.info');
    };

    /**
     * Build a pollinator info popup
     */
    this.buildPollinatorPopUp = function(obj) {
        var content = $('<div>', {
            'class': 'popup-image',
            'html': $('<img>', {
                'src': obj.image
            })
        }).add('<div>', {
            'class': 'border',
            'html': $('<img>', {
                'src': 'content/images/findpollinators/popup_border_trans.png'
            })
        }).add('<div>', {
            'class': 'popup-content',
            'html': $('<div>', {
                'class': 'popup-copy',
                'css': {
                    'width': '208px'
                },
                'html': $('<p>', {
                    'class': 'popup-title',
                    'text': 'You found the ' + obj.title + '!'
                }).add('<p>', {
                    'html': obj.description
                }).add('<p>', {
                    'class': 'buttons',
                    'css': {
                        'width': '190px'
                    },
                    'align': 'center',
                    'html': $('<a>', {
                        'href': 'javascript:void(0)',
                        'class': 'popup-exit',
                        'text': 'KEEP PLAYING!'
                    }).click(function() {
                        instance.hidePopUp();
                    })
                })
            })
        });

        return content;
    };

    /**
     * Build a general info screen
     */
    this.buildStatePopUp = function(obj) {
        var buttons = $('<div>', {
            'class': 'buttons'
        });

        for (var button in obj.buttons) {
            $('<a>', {
                'href': 'javascript:void(0)',
                'text': obj.buttons[button].text,
            }).click(obj.buttons[button].action).appendTo(buttons);
        };

        var content = $('<div>', {
            'class': 'popup-content',
            'html': $('<div>', {
                'class': 'popup-copy',
                'css': {
                    'width': '385px',
                    'text-align': (obj.centered) ? 'center' : 'left',
                    'background-image': 'url(' + obj.backgroundImage + ')',
                    'background-position': (obj.backgroundPos) ? obj.backgroundPos : 'center',
                    'background-repeat': 'no-repeat',
                },
                'html': $('<p>', {
                    'class': 'popup-title',
                    'html': obj.title
                }).add('<p>', {
                    'class': 'popup-description',
                    'html': obj.description
                }).add(buttons)
            })
        });

        return content;
    };

    /**
     * Hide the visible popup window
     */
    this.hidePopUp = function() {
        instance.paused = false;
        $('audio[name=' + instance.sounds['tick'].elem + ']')[0].play();

        $('.info div.visible').addClass('transitioning').removeClass('visible');
        $('.info div').remove();
        $('html').removeClass('overlay');

        setTimeout(function () {
            $('.info div').removeClass('transitioning');
        }, 200);

        if (instance.popUpCallBack !== false) {
            instance.popUpCallBack();
            instance.popUpCallBack = false;
        }

    };

    /**
     * Dim and pause the running game
     */
    this.dimGame = function() {
        instance.paused = true;
        $('audio[name=' + instance.sounds['tick'].elem + ']')[0].pause();
        $('html').addClass('overlay');
    };

    /**
     * Initialize the class
     **/
    this.init();
};

$(document).ready(function() {
    var pollinator = new Pollinator();
});

/**
 * Helper to return a random entry from a jQuery selector
 */
$.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
}