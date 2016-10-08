var $header = $('<header></header>');
var container = $(document).find('#container');
var $h1 = $('<h1><span>I\'m</span> with <span>Her</span></h1>');
var $marquee = $('<h1 id="marquee-container"><span>"I’ve always believed you can learn something from nearly everybody you meet, if you’re open to it."</span></h1>')
function addStars() {
  $header.empty();
  i = 0;
  while (i < (window.innerWidth / 25)) {
    var $starDiv = $('<div class="star-div" style="margin:' + (Math.random()*3) + 'rem"><i class="fa fa-star" aria-hidden="true"></i></div>');
    $header.append($starDiv);
    $header.append($h1);
    i++
  }
}
function spinStars(e) {
  var startAngle = 0;
  $(document).find('.star-div').find('i').css('transform', 'rotate(' + (startAngle + e.target.scrollingElement.scrollTop) + 'deg)');
  if (e.target.scrollingElement.scrollTop === 0) {
    $(document).find('.letter-div').css('transform', 'rotate(0deg)');
  } else {
    $(document).find('.letter-div').css('transform', 'rotate(-10deg)');
  }
}
var $letter = $('<div class="letter-div-wrapper"><h3>RE: JOB POSITION - COMMANDER IN CHIEF</h3><div class="letter-div"><p>Plaid kinfolk slow-carb swag bespoke asymmetrical. Godard artisan fap, blue bottle neutra polaroid stumptown hoodie four loko selfies marfa freegan tacos blog disrupt. Williamsburg VHS af, air plant knausgaard locavore mlkshk bicycle rights edison bulb pug typewriter meditation sustainable venmo hella. Tofu typewriter 3 wolf moon pug. Freegan helvetica thundercats, kale chips heirloom fap leggings master cleanse direct trade vaporware. Selvage fanny pack scenester, selfies neutra four dollar toast humblebrag yr put a bird on it hexagon umami kinfolk. Polaroid shoreditch hashtag beard gochujang, heirloom la croix sartorial.</p><p>Retro plaid venmo, scenester coloring book freegan umami ramps literally air plant. 8-bit waistcoat biodiesel, authentic deep v mustache migas next level knausgaard. Pug intelligentsia street art, ethical celiac mlkshk flannel subway tile echo park. Iceland mlkshk pabst biodiesel flannel fanny pack. Freegan subway tile cardigan paleo knausgaard, wayfarers truffaut tilde narwhal food truck kombucha coloring book. Raclette PBR&B next level wayfarers lo-fi cronut chillwave. Heirloom tilde truffaut chicharrones readymade.</p><p>Ennui pop-up sustainable, celiac vice lumbersexual meggings single-origin coffee whatever meditation cronut fingerstache ethical. Kinfolk irony PBR&B street art activated charcoal unicorn. Whatever meditation normcore, aesthetic +1 fixie subway tile snackwave cred craft beer. Etsy chillwave fap, 90\'s blog bicycle rights cardigan tofu paleo jianbing. Bitters forage roof party semiotics williamsburg 90\'s. Tumblr pabst venmo kogi butcher 90\'s, literally pour-over kickstarter before they sold out. Put a bird on it hoodie austin subway tile vinyl.</p><p>Irony crucifix plaid truffaut stumptown hexagon lumbersexual. Thundercats occupy offal air plant. Jianbing wolf microdosing, normcore try-hard kogi slow-carb ennui leggings occupy sartorial pickled 8-bit gluten-free. Tbh chicharrones freegan, lomo twee PBR&B gentrify blue bottle ethical franzen DIY bushwick. Retro pok pok stumptown, franzen skateboard seitan man bun poutine knausgaard post-ironic. Meditation cliche williamsburg try-hard gastropub cold-pressed fashion axe taxidermy, man braid kitsch hell of. Bicycle rights cardigan roof party, skateboard literally whatever kinfolk humblebrag you probably haven\'t heard of them ennui.</p></div></div>')
container.append($header);
container.append($letter);
addStars();
$(document).on('scroll', spinStars);
$(window).on('resize', addStars);
container.append($marquee);
