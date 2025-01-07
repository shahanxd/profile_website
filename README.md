Profile Website by @shahanxd

This has been my first step into the dev realm and safe to say it was an awesome learning experience which I enjoyed fr.

Built as the CS50x Final Project submission.


External help taken:

- Learnt the basics of React.js via a few oneshots on YT. Used tutorials to set up npm, react and get the project up and running.

- Took assistance from documentations, ChatGPT, and component libraries.

- The core essence of my work was always manual and unaltered by these sources.

Project description:


0. Planning:

Planning took me an entire day. Yes, one whole day of gathering resources, sketching designs on paper, and brainstorming ideas before I even touched the code. Hours of refining and iterating led me to the final scheme of the project.

The profile website itself is built on a black background. And before you ask—no, light mode is not an option. That’s not a bug, it’s a feature. I mean, who even uses light mode these days? Exactly. The font choice? Code Source Pro. Why? Because it adds that "low-level" aesthetic that feels just right for a developer’s portfolio.

Functionality-wise, the website is essentially a landing page. It’s just one webpage, but that’s by design. I firmly believe in keeping things simple and focused. A single page was all I needed to get my point across. And the highlight of the website? That would be the profile toggle. This nifty feature allows viewers to switch between two sides of my personality—the coder and the video editor. It’s not just a content toggle, it changes the finish colors of the website too. Pretty cool, right?

1. Navbar:

Starting with the navbar, let’s talk about the logo. I used useState to trigger a bounce animation whenever it’s clicked. It’s a small detail, but honestly, I love it. Sometimes it’s the little things that bring a project to life. The navbar itself houses three buttons that link to my LinkedIn, GitHub, and a resume hosted on Google Drive. Why Google Drive? Because it’s reliable, convenient, and something everyone’s familiar with. I wanted to prioritize accessibility over anything fancy here.

2. Hero Section:

The hero section truly lives up to its name. It’s the centerpiece of the entire project. This is where I’ve placed the toggle that switches between profiles. The toggle is powered by useState with a simple boolean variable called isCoderProfile. This variable keeps track of which profile is currently active and switches the content of the entire website accordingly.

The hero section also introduces me, briefly showcasing my dual identity as a content creator and editor. It’s simple, direct, and sets the tone for the rest of the site.

3. Achievements Section:

The achievements section is where I highlight my career milestones. It’s all about numbers and impact. Like the hero section, this component also uses the isCoderProfile state to ensure the content reflects the active profile. This way, whether someone’s viewing my coder persona or my video editor side, the achievements always stay relevant.

4. Projects Section:

Now, onto the projects section. This is where I showcase the work I’ve done. Each project has a title, a short description, and skill tags to give viewers a quick idea of what’s involved.

For my video project, I used an <iframe> tag to embed a YouTube video directly into the site. But here’s the cool part, I implemented a variable observer that tracks when the video is at least 50% visible in the viewport. When this condition is met, a boolean variable isVideoVisible is set to true, and the video autoplays. It’s a subtle detail that adds a lot to the user experience.

The coder project? That’s embedded too. I used an <iframe> to embed the entire website into the frame. Now, you might be thinking—won’t embedding a website into itself create an infinite loop and crash everything? Thankfully, browser security features prevent that from happening. So, no, we’re not breaking the internet here.

5. Contact Section:

Finally, we have the contact section. This part of the site is simple but effective. It includes links to my email and social profiles. But here’s the fun twist, there’s a Minecraft-inspired portal. Yes, a portal. Clicking it redirects users to a mailto: link straight to my email. And, just like the rest of the site, the portal’s color changes based on the toggle state. It’s these small touches that make the site feel cohesive and polished.


Reflection:

This started as a much smaller, learn-by-experience project, but grew into one of my best works. Thanks to CS50x for such a wonderful experience - all them lectures have been > any movie xD

I will keep revising and updating this project (hopefully), thanks for reading!
