var $header = $('<header></header>');
var container = $(document).find('#container');
var $h1 = $('<h1><span>I\'m</span> with <span>Her</span></h1>');
var $marquee = $('<h1 id="marquee-container"><span>"I’ve always believed you can learn something from nearly everybody you meet, if you’re open to it."</span></h1>');
var $marginalized = $('<div class="marginalized-container"><p>Let\'s continue to stand up for those who are vulnerable to being left out or <span class="blink">marginalized</span>.</p></div>')
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
  } else if (e.target.scrollingElement.scrollTop >= 440 ){
    $(document).find('.letter-div').css('transform', 'rotate(-10deg)');
  }
}
var $letter = $('<div class="letter-div-wrapper"><h3>RE: LILLY (SEVEN-YEAR-OLD) - NEXT PRESIDENT</h3><div class="letter-div"><ul class="address-info"><li>10 September 2016</li><br><li>United States of America</li><li>12345 Lake Ave.</li><li>Chappaqua, NY 10514</li></ul><br><p>Dear Lilly:</p><br><p>I received a terrific message from your mom, and was touched to learn that you want to change your name to "Lillary" so that you can be president when you grow up. I think Lilly is a great name -- and I hope you know that you don\'t have to change it to become president; if you dream big, work hard, and care deeply about what you believe in, there\'s no limit to what you can achieve.</p><p>I know that it may seem like a lot now, but as you grow and learn and search for your own place in the world, I hope you\'ll consider how you can make your voice heard. Speak your mind in your classes, and at meetings once you have a job. Proudly take credit for your ideas. Have confidence in the value of your contributions. And if the space you\'re in doesn\'t have room for your voice, don\'t be afraid to carve out a space of your own. Don\'t be discouraged. Don\'t give in. Don\'t give up. Don\'t quit -- on yourself, on your dreams, on your future. You really can be anything you want to be. I may become the first woman president, but you, Lilly, could be next.</p><br><p>With warm wishes, I am</p><p>Sincerely yours,</p><img src="http://ih0.redbubble.net/image.175314063.2962/flat,800x800,075,f-c,0,75,800,331.u2.jpg"/></div></div>')
container.append($header);
container.append($letter);
addStars();
$(document).on('scroll', spinStars);
$(window).on('resize', addStars);
container.append($marquee);
container.append($marginalized);
