export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  body: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "getting-started-with-ros2",
    title: "Getting Started with ROS2: A Roboticist's First Week",
    excerpt:
      "Everything we wish someone had told us before writing our first ROS2 node — from workspaces to your first publisher-subscriber pair.",
    category: "ROS2",
    author: "Yuvraj Mehta",
    authorInitials: "YM",
    date: "May 12, 2026",
    readTime: "7 min read",
    body: [
      {
        paragraphs: [
          "ROS2 can feel overwhelming on day one. There are workspaces, packages, nodes, topics, services, and a build system that behaves nothing like the Python scripts most students start with. But once the mental model clicks, it becomes the most productive way to build robots.",
          "In this guide we walk through the exact path we use to onboard every new engineer at RoboFoundary — the same path our summer students follow before they touch real hardware.",
        ],
      },
      {
        heading: "Set up your workspace",
        paragraphs: [
          "A ROS2 workspace is just a folder with a specific structure. Create it, drop your packages inside the src directory, and let colcon handle the build. Keeping one workspace per project keeps dependencies clean and your sanity intact.",
        ],
        bullets: [
          "Install ROS2 Humble (LTS) — it is the version we standardize on.",
          "Create a workspace and a src folder inside it.",
          "Source the setup file in every new terminal, or add it to your shell profile.",
        ],
      },
      {
        heading: "Your first publisher and subscriber",
        paragraphs: [
          "The classic first program is a talker and a listener. One node publishes a string on a topic; another subscribes and prints it. It is trivial, but it teaches the single most important concept in ROS2: nodes never talk to each other directly, they talk through topics.",
        ],
        callout:
          "Rule of thumb: if two parts of your robot need to share data, ask whether it should be a topic (streaming), a service (request/response), or an action (long-running goal).",
      },
      {
        heading: "Where to go next",
        paragraphs: [
          "Once talker/listener works, rebuild it with custom message types, then add a parameter, then a launch file. By the end of the week you will have the vocabulary to read almost any ROS2 codebase — including the ones running on the arms in our lab.",
        ],
      },
    ],
  },
  {
    slug: "computer-vision-on-a-budget",
    title: "Computer Vision on a Budget: What a Webcam Can Really Do",
    excerpt:
      "You don't need a depth camera to build something impressive. Here's how far a plain USB webcam and OpenCV can take a beginner project.",
    category: "Computer Vision",
    author: "Pushkar Shinde",
    authorInitials: "PS",
    date: "April 28, 2026",
    readTime: "6 min read",
    body: [
      {
        paragraphs: [
          "Every robotics beginner wants to do computer vision, and almost every beginner assumes they need expensive hardware. They don't. A twelve-dollar webcam, OpenCV, and a laptop can get you surprisingly far.",
        ],
      },
      {
        heading: "Start with color, not deep learning",
        paragraphs: [
          "Object detection with neural networks is exciting, but color thresholding in HSV space is a better first project. It is fast, it runs on any machine, and it teaches you how images are actually represented in memory.",
        ],
        bullets: [
          "Convert frames from BGR to HSV for stable color detection.",
          "Use contour detection to find and track colored objects.",
          "Draw bounding boxes to visualize what the robot 'sees'.",
        ],
      },
      {
        heading: "When to graduate to models",
        paragraphs: [
          "Once you hit the limits of classical methods — cluttered backgrounds, varied lighting, many object classes — that is the right time to reach for a pretrained model. Not before. Understanding the fundamentals first makes the deep learning far less mysterious.",
        ],
        callout:
          "The best vision engineers we know can debug a pipeline by looking at the intermediate frames, not just the final output. Always visualize each stage.",
      },
    ],
  },
  {
    slug: "why-real-hardware-matters",
    title: "Why Real Hardware Matters More Than Another Simulation",
    excerpt:
      "Simulators are essential, but they hide the messy realities of the physical world. Here's why we put students on real arms early.",
    category: "Learning",
    author: "Jiya Nagpal",
    authorInitials: "JN",
    date: "April 10, 2026",
    readTime: "5 min read",
    body: [
      {
        paragraphs: [
          "Simulation is one of the great gifts of modern robotics. You can iterate for free, break nothing, and test ideas at 3am. But there is a gap between a robot that works in Gazebo and one that works on a bench — and that gap is where real engineers are made.",
        ],
      },
      {
        heading: "The things sim doesn't teach",
        bullets: [
          "Latency and jitter in real communication buses.",
          "Sensor noise that no idealized model captures.",
          "The humbling moment a gripper drops a part it 'should' have held.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We use simulation for what it is great at — rapid iteration and safety — and then move students onto real Orangewood arms as early as possible. The result is engineers who are not surprised when reality misbehaves, because they have already felt it.",
        ],
        callout:
          "A student who has debugged a real robot once is worth more than one who has run a thousand perfect simulations.",
      },
    ],
  },
  {
    slug: "slam-explained-simply",
    title: "SLAM Explained Simply: How Robots Build Maps",
    excerpt:
      "Simultaneous Localization and Mapping sounds intimidating. At its core it's a robot answering two questions at once — and we break it down.",
    category: "Autonomy",
    author: "Yuvraj Mehta",
    authorInitials: "YM",
    date: "March 22, 2026",
    readTime: "8 min read",
    body: [
      {
        paragraphs: [
          "SLAM is the technology that lets a robot enter an unknown room and come out with a map — while also knowing where it is on that map. It powers everything from robot vacuums to self-driving cars.",
        ],
      },
      {
        heading: "Two questions, one loop",
        paragraphs: [
          "The 'simultaneous' in SLAM is the whole trick. A robot needs a map to know where it is, but it needs to know where it is to build a map. SLAM solves both at once, refining each estimate against the other as new sensor data arrives.",
        ],
        bullets: [
          "Localization: where am I relative to what I've seen?",
          "Mapping: what does the environment look like?",
          "Loop closure: recognizing a place you've been before to correct drift.",
        ],
      },
      {
        heading: "Getting hands-on",
        paragraphs: [
          "The best way to understand SLAM is to run it. With ROS2 and a lidar (or even a depth camera), you can watch a map assemble itself in real time as you drive a robot around a room. It stops being abstract the moment you see the walls appear.",
        ],
        callout:
          "Drift is the enemy. Every SLAM system is, in some sense, an elaborate strategy for fighting the accumulation of small errors.",
      },
    ],
  },
  {
    slug: "from-student-to-engineer",
    title: "From Student to Engineer: A RoboFoundary Journey",
    excerpt:
      "One summer student went from never touching a robot to shipping a pick-and-place demo in three weeks. Here's what that looked like.",
    category: "Community",
    author: "Aditya Bhatia",
    authorInitials: "AB",
    date: "March 5, 2026",
    readTime: "6 min read",
    body: [
      {
        paragraphs: [
          "Every cohort has a story that reminds us why we do this. This one is about a second-year student who applied to our summer program having never written a line of robotics code.",
        ],
      },
      {
        heading: "Week one: fundamentals",
        paragraphs: [
          "The first week is deliberately uncomfortable. New tools, new vocabulary, and a mentor who refuses to give you the answer. By Friday, our student had a ROS2 node talking to a simulated arm.",
        ],
      },
      {
        heading: "Week three: the demo",
        paragraphs: [
          "By the final week she was running a full pick-and-place routine on a real Orangewood arm, tuned by her own hands. The demo was not flawless — the gripper missed twice — but she debugged it live, and that is the whole point.",
        ],
        callout:
          "We don't measure success by whether the demo works on the first try. We measure it by whether the student can fix it when it doesn't.",
      },
    ],
  },
  {
    slug: "choosing-your-first-robotics-kit",
    title: "Choosing Your First Robotics Kit: A Practical Guide",
    excerpt:
      "With so many kits on the market, where should a beginner start? We break down what actually matters when buying your first one.",
    category: "Hardware",
    author: "Rudranil Bose",
    authorInitials: "RB",
    date: "February 18, 2026",
    readTime: "5 min read",
    body: [
      {
        paragraphs: [
          "A good first kit accelerates learning; a bad one collects dust. After watching hundreds of students start their journeys, we have strong opinions about what makes the difference.",
        ],
      },
      {
        heading: "What actually matters",
        bullets: [
          "Documentation quality — a kit is only as good as its guide.",
          "A real programming interface, not just a drag-and-drop app you'll outgrow.",
          "Expandability, so the kit grows with your skills instead of capping them.",
        ],
      },
      {
        heading: "Avoid the shiny trap",
        paragraphs: [
          "The most expensive, feature-packed kit is rarely the best starting point. Beginners learn faster with fewer, well-explained components than with a box of parts they cannot yet contextualize.",
        ],
        callout:
          "Buy the kit that comes with the best learning path, not the one with the most parts. Every time.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
