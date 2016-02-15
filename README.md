<h1>Facebook event import</h1>
<h2>JavaScript for fetching event object from FB graph API</h2>
<h3>Install</h3>
<p>
Include jQuery before this script<br />
<code>
&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/script/jquery.js)&quot;&gt;&lt;/script&gt;
</code><br/><br/>
Include this script<br />
<code>
&lt;script type=&quot;text/javascript&quot; src=&quot;path/to/script/fb-event-import.js)&quot;&gt;&lt;/script&gt;
</code>
<br />
<br />
Open fb-event-import.js file and set configuration variables<br /><br />
var buttonId = 'BUTTON_ELEMENT_ID'; <br />
var elementId = 'INPUT_ELEMENT_ID'; <br />
var url = 'URL_FOR_DATA_PROCESSING'; <br />
var appId = 'YOUR_FACEBOOK_APP_ID' <br />
<br />
Script can detect any kind of facebook event link /events/{id}, /https://facebook.com/events/{id}, {id} or pretty much any other :)<br />
Script parses POST data to your defined url<br />
</p>
