import React from 'react';
import featureimage from '../images/Frame 19.png';
import {Link} from 'react-scroll';

function Privacy() {
    return (
        <div id='features'>
           {/* <div className='features-model'> */}
                {/* <img src={featureimage} alt='feature-image' /> */}
                {/* <img src='https://newocean.in/wp-content/uploads/2019/11/privacy-policy.jpg' alt='feature-image' /> */}
           {/* </div> */}
           <div className='features-text'>
               <h2>Privacy Policy</h2>
               <h3>
               In this privacy policy we depict the duties, obligations and privileges aspects of Zvi Yamin LTD / mlThings.ai / Snakes.LTD / WeedleApps / Amplez regarding the disclosure, use and collection of information practices between our services and end users.
We are committed to protecting your privacy when you play our games or use our services. This privacy policy explains how we collect, use, disclose and protect your personal information.
                    </h3>
               <p>
               1. COLLECTION OF INFORMATION <br/> 
               <ul>
               We may collect the following information about you:<br/><br/>
               {/* <br/><br/> */}
<li>
    {/* <u>Anonymous Information</u> <br/> */}
    - Contact information, such as your name, email address and phone number (optional and will be used for developer communications purposes).
</li>
<li>
- Demographic information, such as your age, gender, and location.
</li>
<li>
- Game data, such as your game progress, scores, and achievements.
</li>
<li>
    {/* <u>Personal Information</u> <br/> */}
    - Other information you may choose to provide, such as feedback or survey responses.
</li>
{/* <li>
    <u>Mobile Identifiers</u> <br/>
     When you are using our a mobile application that incorporates our Services, we may also automatically record your Google Advertising ID (if you are using an Android device) or your Advertising Identifier (IDFA – if you are using an iOS device; together with the Google Advertising ID – “Mobile Advertising IDs”), for advertising or analytics purposes. The Google Advertising ID is an anonymous identifier, provided by Google Play services. If your device has an Advertising ID, we may collect and use it for advertising and user analytics purposes. If your device does not have Advertising ID, we may use other persistent identifiers. The information collected may be also stored on your device. Please see below how you can reset you mobile Advertising ID or opt-out of receiving targeted ads through your mobile Advertising IDs.
</li> */}
</ul>
2. USE OF INFORMATION<br/>
<ul>
We may use the information we collect for the following purposes:
<br/><br/>
 
<li>- To provide and improve the game and its features
</li>
<li>- To personalize your experience and provide content that is more relevant to you.</li>
<li>- To notify you of updates and new features.
</li>
<li>- To measure and analyze the use of the game.
</li>
<li>- To provide customer support and respond to your inquiries.
</li>
<li>- To conduct research and analysis.
</li>
{/* <li>g. To resolve disputes and enforce our policies, including investigation of potential violations thereof, for the purpose of law enforcement or in accordance with any applicable law or regulation.
</li> */}
</ul>
3. DISCLOSURE OF INFORMATION
<ul>
We may share device ID with third parties for the following purposes:
<br/><br/>
<li>- Analytics, to track and analyze game usage and performance</li>
<li>- Advertising and Marketing, to deliver targeted ads and promotional messages
</li>
<li>- Fraud prevention, security, and compliance, to protect our games and users
</li>

</ul>
4. PROTECTION OF INFORMATION
<ul>
We take reasonable steps to protect your information from unauthorized access, use, or disclosure. We use appropriate security measures, including encryption, firewalls, and secure servers, to protect your information. We assure you that your provided data will not be used for any other purposes other than what was specified above.
</ul>
5. ANDROID OPT OUT
<ul>
Using the operating system employed by Google, the user can opt out from targeted ads on his/hers Android. In order to do so, the user should consult his/hers device manufacturer or follow a manual regarding the opt out instructions for his/hers personal mobile.
</ul>
6. UPDATES TO THIS PRIVACY POLICY
<ul>
We may update this Privacy Policy from time to time. If we make any changes, we will post the updated policy on our website and update the effective date at the top of this policy.
</ul>
7. CONTACT US
<ul>
If you have any questions or concerns about our privacy policy, please contact us at info@zviyamin.com
</ul>

               </p>
               <a href="https://zviyamin.com/">
               <button onclick="/" type="button">Back To Home Page</button>
               <br/><br/>
               </a>
           </div>
        </div>
    )
}

export default Privacy;