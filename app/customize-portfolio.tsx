"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Trash2, Download } from "lucide-react"

export default function CustomizePortfolio() {
  // Basic Information
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    title: "",
    subtitle: "",
    profileImage: "",
    about: ["", "", ""],
  })

  // Skills
  const [skillGroups, setSkillGroups] = useState([
    {
      category: "Data Visualization",
      skills: [{ name: "Tableau", icon: "" }],
    },
  ])

  // Projects
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      image: "",
      link: "",
      technologies: [""],
    },
  ])

  // Experience
  const [experiences, setExperiences] = useState([
    {
      title: "",
      company: "",
      location: "",
      period: "",
      description: [""],
      tools: "",
    },
  ])

  // Contact
  const [contactInfo, setContactInfo] = useState({
    email: "",
    linkedin: "",
    phone: "",
    github: "",
  })

  // Update basic info
  const updateBasicInfo = (field, value) => {
    setBasicInfo({ ...basicInfo, [field]: value })
  }

  // Update about paragraphs
  const updateAboutParagraph = (index, value) => {
    const newAbout = [...basicInfo.about]
    newAbout[index] = value
    setBasicInfo({ ...basicInfo, about: newAbout })
  }

  // Add about paragraph
  const addAboutParagraph = () => {
    setBasicInfo({ ...basicInfo, about: [...basicInfo.about, ""] })
  }

  // Remove about paragraph
  const removeAboutParagraph = (index) => {
    const newAbout = [...basicInfo.about]
    newAbout.splice(index, 1)
    setBasicInfo({ ...basicInfo, about: newAbout })
  }

  // Add skill group
  const addSkillGroup = () => {
    setSkillGroups([...skillGroups, { category: "", skills: [{ name: "", icon: "" }] }])
  }

  // Update skill group
  const updateSkillGroup = (groupIndex, field, value) => {
    const newSkillGroups = [...skillGroups]
    newSkillGroups[groupIndex][field] = value
    setSkillGroups(newSkillGroups)
  }

  // Add skill to group
  const addSkillToGroup = (groupIndex) => {
    const newSkillGroups = [...skillGroups]
    newSkillGroups[groupIndex].skills.push({ name: "", icon: "" })
    setSkillGroups(newSkillGroups)
  }

  // Update skill
  const updateSkill = (groupIndex, skillIndex, field, value) => {
    const newSkillGroups = [...skillGroups]
    newSkillGroups[groupIndex].skills[skillIndex][field] = value
    setSkillGroups(newSkillGroups)
  }

  // Remove skill
  const removeSkill = (groupIndex, skillIndex) => {
    const newSkillGroups = [...skillGroups]
    newSkillGroups[groupIndex].skills.splice(skillIndex, 1)
    setSkillGroups(newSkillGroups)
  }

  // Remove skill group
  const removeSkillGroup = (groupIndex) => {
    const newSkillGroups = [...skillGroups]
    newSkillGroups.splice(groupIndex, 1)
    setSkillGroups(newSkillGroups)
  }

  // Add project
  const addProject = () => {
    setProjects([...projects, { title: "", description: "", image: "", link: "", technologies: [""] }])
  }

  // Update project
  const updateProject = (index, field, value) => {
    const newProjects = [...projects]
    newProjects[index][field] = value
    setProjects(newProjects)
  }

  // Add technology to project
  const addTechnologyToProject = (projectIndex) => {
    const newProjects = [...projects]
    newProjects[projectIndex].technologies.push("")
    setProjects(newProjects)
  }

  // Update technology
  const updateTechnology = (projectIndex, techIndex, value) => {
    const newProjects = [...projects]
    newProjects[projectIndex].technologies[techIndex] = value
    setProjects(newProjects)
  }

  // Remove technology
  const removeTechnology = (projectIndex, techIndex) => {
    const newProjects = [...projects]
    newProjects[projectIndex].technologies.splice(techIndex, 1)
    setProjects(newProjects)
  }

  // Remove project
  const removeProject = (index) => {
    const newProjects = [...projects]
    newProjects.splice(index, 1)
    setProjects(newProjects)
  }

  // Add experience
  const addExperience = () => {
    setExperiences([...experiences, { title: "", company: "", location: "", period: "", description: [""], tools: "" }])
  }

  // Update experience
  const updateExperience = (index, field, value) => {
    const newExperiences = [...experiences]
    newExperiences[index][field] = value
    setExperiences(newExperiences)
  }

  // Add description point to experience
  const addDescriptionPoint = (expIndex) => {
    const newExperiences = [...experiences]
    newExperiences[expIndex].description.push("")
    setExperiences(newExperiences)
  }

  // Update description point
  const updateDescriptionPoint = (expIndex, pointIndex, value) => {
    const newExperiences = [...experiences]
    newExperiences[expIndex].description[pointIndex] = value
    setExperiences(newExperiences)
  }

  // Remove description point
  const removeDescriptionPoint = (expIndex, pointIndex) => {
    const newExperiences = [...experiences]
    newExperiences[expIndex].description.splice(pointIndex, 1)
    setExperiences(newExperiences)
  }

  // Remove experience
  const removeExperience = (index) => {
    const newExperiences = [...experiences]
    newExperiences.splice(index, 1)
    setExperiences(newExperiences)
  }

  // Update contact info
  const updateContactInfo = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value })
  }

  // Generate portfolio data
  const generatePortfolioData = () => {
    const portfolioData = {
      basicInfo,
      skillGroups,
      projects,
      experiences,
      contactInfo,
    }

    // Convert to JSON string with pretty formatting
    const jsonData = JSON.stringify(portfolioData, null, 2)

    // Create a blob and download link
    const blob = new Blob([jsonData], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "portfolio-data.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Customize Your Portfolio</CardTitle>
          <CardDescription>
            Fill out the information below to customize your portfolio. Once complete, download your data and follow the
            instructions to update your portfolio.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="basic">
        <TabsList className="mb-6">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        {/* Basic Info Tab */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <Input
                  value={basicInfo.name}
                  onChange={(e) => updateBasicInfo("name", e.target.value)}
                  placeholder="e.g., John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Professional Title</label>
                <Input
                  value={basicInfo.title}
                  onChange={(e) => updateBasicInfo("title", e.target.value)}
                  placeholder="e.g., Data Analyst & Machine Learning Enthusiast"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subtitle/Short Description</label>
                <Input
                  value={basicInfo.subtitle}
                  onChange={(e) => updateBasicInfo("subtitle", e.target.value)}
                  placeholder="e.g., Master's student in Applied Data Analytics"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Profile Image URL</label>
                <Input
                  value={basicInfo.profileImage}
                  onChange={(e) => updateBasicInfo("profileImage", e.target.value)}
                  placeholder="https://example.com/your-image.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a URL to your profile image. You can upload an image to a service like Imgur and paste the link
                  here.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">About Me Paragraphs</label>
                {basicInfo.about.map((paragraph, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <Textarea
                      value={paragraph}
                      onChange={(e) => updateAboutParagraph(index, e.target.value)}
                      placeholder="Write a paragraph about yourself"
                      className="flex-grow mr-2"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeAboutParagraph(index)}
                      disabled={basicInfo.about.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={addAboutParagraph} className="mt-2">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Paragraph
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your skill groups and individual skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="border p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Skill Group {groupIndex + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSkillGroup(groupIndex)}
                      disabled={skillGroups.length <= 1}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Group
                    </Button>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Category Name</label>
                    <Input
                      value={group.category}
                      onChange={(e) => updateSkillGroup(groupIndex, "category", e.target.value)}
                      placeholder="e.g., Data Visualization"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-medium">Skills</label>
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(groupIndex, skillIndex, "name", e.target.value)}
                          placeholder="Skill name"
                          className="flex-grow"
                        />
                        <Input
                          value={skill.icon}
                          onChange={(e) => updateSkill(groupIndex, skillIndex, "icon", e.target.value)}
                          placeholder="Icon URL"
                          className="flex-grow"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeSkill(groupIndex, skillIndex)}
                          disabled={group.skills.length <= 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={() => addSkillToGroup(groupIndex)}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Skill
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addSkillGroup}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Skill Group
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Add your notable projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="border p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Project {projectIndex + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeProject(projectIndex)}
                      disabled={projects.length <= 1}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Project
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Project Title</label>
                      <Input
                        value={project.title}
                        onChange={(e) => updateProject(projectIndex, "title", e.target.value)}
                        placeholder="e.g., Portfolio Optimization using Machine Learning"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(projectIndex, "description", e.target.value)}
                        placeholder="Describe your project"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Image URL</label>
                      <Input
                        value={project.image}
                        onChange={(e) => updateProject(projectIndex, "image", e.target.value)}
                        placeholder="https://example.com/project-image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Project Link</label>
                      <Input
                        value={project.link}
                        onChange={(e) => updateProject(projectIndex, "link", e.target.value)}
                        placeholder="https://github.com/yourusername/project"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Technologies Used</label>
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-2 mb-2">
                          <Input
                            value={tech}
                            onChange={(e) => updateTechnology(projectIndex, techIndex, e.target.value)}
                            placeholder="e.g., Python"
                            className="flex-grow"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeTechnology(projectIndex, techIndex)}
                            disabled={project.technologies.length <= 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" onClick={() => addTechnologyToProject(projectIndex)}>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Technology
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addProject}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Add your professional experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, expIndex) => (
                <div key={expIndex} className="border p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Experience {expIndex + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(expIndex)}
                      disabled={experiences.length <= 1}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Experience
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Job Title</label>
                      <Input
                        value={exp.title}
                        onChange={(e) => updateExperience(expIndex, "title", e.target.value)}
                        placeholder="e.g., Data Analyst Intern"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      <Input
                        value={exp.company}
                        onChange={(e) => updateExperience(expIndex, "company", e.target.value)}
                        placeholder="e.g., Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <Input
                        value={exp.location}
                        onChange={(e) => updateExperience(expIndex, "location", e.target.value)}
                        placeholder="e.g., New York, NY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Time Period</label>
                      <Input
                        value={exp.period}
                        onChange={(e) => updateExperience(expIndex, "period", e.target.value)}
                        placeholder="e.g., June 2020 – July 2022"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description Points</label>
                      {exp.description.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-2 mb-2">
                          <Textarea
                            value={point}
                            onChange={(e) => updateDescriptionPoint(expIndex, pointIndex, e.target.value)}
                            placeholder="Describe your responsibilities and achievements"
                            className="flex-grow"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => removeDescriptionPoint(expIndex, pointIndex)}
                            disabled={exp.description.length <= 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" onClick={() => addDescriptionPoint(expIndex)}>
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Description Point
                      </Button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Tools & Technologies</label>
                      <Input
                        value={exp.tools}
                        onChange={(e) => updateExperience(expIndex, "tools", e.target.value)}
                        placeholder="e.g., Power BI, Tableau, Python, SQL"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={addExperience}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Add your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  value={contactInfo.email}
                  onChange={(e) => updateContactInfo("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                <Input
                  value={contactInfo.linkedin}
                  onChange={(e) => updateContactInfo("linkedin", e.target.value)}
                  placeholder="https://www.linkedin.com/in/yourusername"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <Input
                  value={contactInfo.phone}
                  onChange={(e) => updateContactInfo("phone", e.target.value)}
                  placeholder="e.g., 123-456-7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GitHub URL</label>
                <Input
                  value={contactInfo.github}
                  onChange={(e) => updateContactInfo("github", e.target.value)}
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Export Tab */}
        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Export Your Data</CardTitle>
              <CardDescription>
                Download your portfolio data and follow the instructions to update your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                <h3 className="font-medium mb-2">How to update your portfolio:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Click the "Download Portfolio Data" button below to save your information</li>
                  <li>
                    Use the downloaded JSON file to update the corresponding components in your Next.js portfolio
                    project
                  </li>
                  <li>
                    Replace the existing data in the following files:
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        <code>app/layout.tsx</code> - Update the metadata with your name and description
                      </li>
                      <li>
                        <code>app/components/Hero.tsx</code> - Update with your basic information
                      </li>
                      <li>
                        <code>app/components/About.tsx</code> - Update with your about paragraphs
                      </li>
                      <li>
                        <code>app/components/Skills.tsx</code> - Replace the skillGroups array
                      </li>
                      <li>
                        <code>app/components/Projects.tsx</code> - Replace the projects array
                      </li>
                      <li>
                        <code>app/components/Experience.tsx</code> - Replace the experiences array
                      </li>
                      <li>
                        <code>app/components/Contact.tsx</code> - Update with your contact information
                      </li>
                      <li>
                        <code>app/components/Footer.tsx</code> - Update with your name and social links
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <Button onClick={generatePortfolioData} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Portfolio Data
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
