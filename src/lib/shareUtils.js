/**
 * Reusable utility to generate dynamic and rich sharing text content for projects.
 * Formatted specifically for WhatsApp, LinkedIn, Facebook, Twitter, Telegram, and Email.
 */
export function generateShareContent(project) {
  const name = project.name || "Project";
  const desc = project.shortDescription ? project.shortDescription.slice(0, 200) : "";
  const featuresList = project.features ? project.features.map(f => `• ${f}`).join("\n") : "";
  const featuresCheck = project.features ? project.features.map(f => `✅ ${f}`).join("\n") : "";
  const techStack = project.technologies ? project.technologies.join(", ") : "";
  const techPipe = project.technologies ? project.technologies.join(" | ") : "";
  const live = project.liveUrl || "";
  const github = project.githubUrl || "";
  const hashtags = project.keywords ? project.keywords.map(k => `#${k}`).join(" ") : "";

  // 1. WhatsApp Format
  const whatsapp = `🚀 Check out this project!

📌 Project: ${name}

📝 ${desc}

✨ Features:
${featuresList}

🛠 Tech Stack:
${techStack}

🌐 Live Demo:
${live}

💻 GitHub:
${github}

${hashtags}`;

  // 2. LinkedIn Format
  const linkedin = `🚀 Excited to share one of my recent projects!

${name}

${desc}

Key Highlights:
${featuresCheck}

Tech Stack:
${techPipe}

Live Demo:
${live}

GitHub Repository:
${github}

I'd appreciate your feedback.

${hashtags}`;

  // 3. Facebook Format
  const facebook = `🔥 Check out our latest project: ${name}!

✨ Designed & Developed by ${project.company || "NextGen Technology"}
📂 Category: ${project.category || "Software"}

📝 Description:
${desc}

🛠 Built with: ${techStack}

🔗 View Live Demo: ${live}
💻 Source Code: ${github}

${hashtags}`;

  // 4. Twitter / X Format (Truncated to fit 280 chars)
  const baseTwitterText = `🚀 Project: ${name}
📝 ${desc.slice(0, 80)}...
🛠 Tech: ${techStack.slice(0, 50)}
🌐 Demo: ${live}
${hashtags.slice(0, 40)}`;
  const twitter = baseTwitterText.slice(0, 280);

  // 5. Telegram Format
  const telegram = `🚀 *Check out this project!*

📌 *Project:* ${name}
📝 ${desc}

🛠 *Tech Stack:* ${techStack}

🌐 *Live Demo:* ${live}
💻 *GitHub:* ${github}

${hashtags}`;

  // 6. Email Format
  const emailSubject = `Check out my project - ${name}`;
  const emailBody = `Hi there,

I'd love for you to check out one of our recent projects: ${name}.

Project Details:
- Category: ${project.category || "Software Development"}
- Developed by: ${project.company || "NextGen Technology"}

Description:
${project.description || desc}

Key Features:
${featuresList}

Tech Stack:
${techStack}

Live Demo: ${live}
GitHub Repository: ${github}

Best regards,
${project.company || "NextGen Technology"}`;

  return {
    whatsapp,
    linkedin,
    facebook,
    twitter,
    telegram,
    emailSubject,
    emailBody,
  };
}
