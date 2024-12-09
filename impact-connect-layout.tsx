import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Menu, X, Search, Bell, User, LogOut, Award, Calendar, MapPin, Clock, ArrowLeft, Building2, Send } from 'lucide-react'

export default function ImpactConnectLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userType, setUserType] = useState(null)
  const [currentView, setCurrentView] = useState('main')
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Beach Clean-up", date: "June 15, 2023", location: "Sunset Beach", volunteers: 12, description: "Join us for a beach clean-up event!" },
    { id: 2, title: "Ocean Education Workshop", date: "July 1, 2023", location: "City Library", volunteers: 5, description: "Educate the community about ocean conservation." },
  ])
  const [applications, setApplications] = useState([
    { id: 1, name: "John Doe", opportunity: "Beach Clean-up", date: "May 10, 2023" },
    { id: 2, name: "Jane Smith", opportunity: "Ocean Education Workshop", date: "May 12, 2023" },
  ])
  const [chatMessages, setChatMessages] = useState([
    { sender: "John", message: "Hey everyone! Excited for the clean-up tomorrow!", time: "10:30 AM" },
    { sender: "Sarah", message: "Me too! What time are we meeting?", time: "10:35 AM" },
    { sender: "Ocean Guardians", message: "We'll meet at Sunset Beach parking lot at 9 AM. Don't forget to bring gloves!", time: "10:40 AM" },
    { sender: "Mike", message: "Sounds good. See you all there!", time: "10:45 AM" },
  ])

  const LandingPage = () => (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect. Volunteer. Impact.</h1>
          <p className="text-xl mb-8">Join ImpactConnect and make a difference in your community</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-100" onClick={() => setCurrentView('login')}>Get Started</Button>
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Create Your Profile", icon: User, description: "Sign up and tell us about your skills and interests" },
              { title: "Find Opportunities", icon: Search, description: "Browse and apply for volunteer opportunities that match your profile" },
              { title: "Make an Impact", icon: Award, description: "Contribute your time and skills to meaningful causes" }
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah L.", quote: "ImpactConnect helped me find the perfect opportunity to use my graphic design skills for a local non-profit. It's been incredibly rewarding!" },
              { name: "Michael R.", quote: "As a retired teacher, I wanted to continue making a difference. Thanks to ImpactConnect, I now tutor underprivileged kids twice a week." }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8">Join ImpactConnect today and start your volunteering journey</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100" onClick={() => setCurrentView('login')}>Sign Up Now</Button>
        </div>
      </section>
    </>
  )

  const LoginPage = () => (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login to ImpactConnect</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="volunteer">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
            </TabsList>
            <TabsContent value="volunteer">
              <form onSubmit={(e) => {
                e.preventDefault()
                setUserType('volunteer')
                setCurrentView('main')
              }}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="volunteer-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" id="volunteer-email" required />
                  </div>
                  <div>
                    <label htmlFor="volunteer-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input type="password" id="volunteer-password" required />
                  </div>
                  <Button type="submit" className="w-full">Login as Volunteer</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="organization">
              <form onSubmit={(e) => {
                e.preventDefault()
                setUserType('organization')
                setCurrentView('main')
              }}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="org-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" id="org-email" required />
                  </div>
                  <div>
                    <label htmlFor="org-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input type="password" id="org-password" required />
                  </div>
                  <Button type="submit" className="w-full">Login as Organization</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )

  const VolunteerDashboard = () => (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, Alex!</h1>
      <Tabs defaultValue="opportunities" className="w-full">
        <TabsList>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="impact">My Impact</TabsTrigger>
          <TabsTrigger value="chats">Project Chats</TabsTrigger>
        </TabsList>
        <TabsContent value="opportunities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{opportunity.org}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {opportunity.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <Button 
                    className="mt-4 w-full"
                    onClick={() => {
                      setSelectedOpportunity(opportunity)
                      setCurrentView('application')
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="impact">
          <Card>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Hours Volunteered</span>
                    <span className="font-bold">48 hours</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Projects Completed</span>
                    <span className="font-bold">12</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Organizations Helped</span>
                    <span className="font-bold">5</span>
                  </div>
                  <Progress value={50} />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Recent Achievements</h3>
                <ul className="list-disc list-inside">
                  <li>Completed 10+ hours of tutoring</li>
                  <li>Participated in community clean-up event</li>
                  <li>Received "Dedicated Volunteer" badge</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chats">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                setSelectedOpportunity(opportunity)
                setCurrentView('groupChat')
              }}>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Click to join the chat</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  const OrganizationDashboard = () => (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, Ocean Guardians!</h1>
      <Tabs defaultValue="opportunities" className="w-full">
        <TabsList>
          <TabsTrigger value="opportunities">Your Opportunities</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="chats">Project Chats</TabsTrigger>
        </TabsList>
        <TabsContent value="opportunities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {opportunity.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    {opportunity.volunteers} volunteers signed up
                  </div>
                  <Button 
                    className="mt-4 w-full"
                    onClick={() => {
                      setSelectedOpportunity(opportunity)
                      setCurrentView('manageOpportunity')
                    }}
                  >
                    Manage Opportunity
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-6" onClick={() => setCurrentView('createOpportunity')}>Create New Opportunity</Button>
        </TabsContent>
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {applications.map((application) => (
                  <li key={application.id} className="flex justify-between items-center">
                    <div>
                      
                      <p className="font-semibold">{application.name}</p>
                      <p className="text-sm text-gray-500">{application.opportunity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{application.date}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setSelectedApplication(application)
                          setCurrentView('reviewApplication')
                        }}
                      >
                        Review
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chats">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                setSelectedOpportunity(opportunity)
                setCurrentView('groupChat')
              }}>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Click to join the chat</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )

  const ApplicationForm = () => (
    <div className="container mx-auto py-8">
      <Button 
        className="mb-4"
        onClick={() => setCurrentView('main')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Opportunities
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Apply for {selectedOpportunity.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault()
            alert('Application submitted successfully!')
            setCurrentView('main')
          }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Relevant Experience</label>
                <Textarea id="experience" name="experience" rows={4} />
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">Why do you want to volunteer for this opportunity?</label>
                <Textarea id="motivation" name="motivation" rows={4} required />
              </div>
              <Button type="submit" className="w-full">Submit Application</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )

  const ReviewApplication = () => (
    <div className="container mx-auto py-8">
      <Button 
        className="mb-4"
        onClick={() => setCurrentView('main')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Applications
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Review Application: {selectedApplication.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Applicant Details</h3>
              <p><strong>Name:</strong> {selectedApplication.name}</p>
              <p><strong>Opportunity:</strong> {selectedApplication.opportunity}</p>
              <p><strong>Applied on:</strong> {selectedApplication.date}</p>
            </div>
            <div>
              <h3 className="font-semibold">Application Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                className="flex-1" 
                variant="outline" 
                onClick={() => {
                  setApplications(applications.filter(app => app.id !== selectedApplication.id))
                  alert('Application declined')
                  setCurrentView('main')
                }}
              >
                Decline
              </Button>
              <Button 
                className="flex-1"
                onClick={() => {
                  alert('Application accepted')
                  setCurrentView('main')
                }}
              >
                Accept
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const GroupChat = () => {
    const [newMessage, setNewMessage] = useState('')

    const handleSendMessage = (e) => {
      e.preventDefault()
      if (newMessage.trim()) {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setChatMessages([...chatMessages, { sender: "You", message: newMessage, time: currentTime }])
        setNewMessage('')
      }
    }

    return (
      <div className="container mx-auto py-8">
        <Button 
          className="mb-4"
          onClick={() => setCurrentView('main')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Group Chat: {selectedOpportunity.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {chatMessages.map((message, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-semibold">{message.sender}</p>
                  <p>{message.message}</p>
                  <p className="text-xs text-gray-500 text-right">{message.time}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input 
                placeholder="Type your message..." 
                className="flex-grow" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  const ManageOpportunity = () => {
    const [updatedOpportunity, setUpdatedOpportunity] = useState(selectedOpportunity)

    const handleUpdate = (e) => {
      e.preventDefault()
      setOpportunities(opportunities.map(opp => opp.id === updatedOpportunity.id ? updatedOpportunity : opp))
      alert('Opportunity updated successfully!')
      setCurrentView('main')
    }

    return (
      <div className="container mx-auto py-8">
        <Button 
          className="mb-4"
          onClick={() => setCurrentView('main')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Opportunities
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Manage Opportunity: {selectedOpportunity.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdate}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input 
                    type="text" 
                    id="title" 
                    value={updatedOpportunity.title} 
                    onChange={(e) => setUpdatedOpportunity({...updatedOpportunity, title: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <Input 
                    type="text" 
                    id="date" 
                    value={updatedOpportunity.date} 
                    onChange={(e) => setUpdatedOpportunity({...updatedOpportunity, date: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <Input 
                    type="text" 
                    id="location" 
                    value={updatedOpportunity.location} 
                    onChange={(e) => setUpdatedOpportunity({...updatedOpportunity, location: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <Textarea 
                    id="description" 
                    value={updatedOpportunity.description} 
                    onChange={(e) => setUpdatedOpportunity({...updatedOpportunity, description: e.target.value})}
                    rows={4} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Update Opportunity</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  const CreateOpportunity = () => {
    const [newOpportunity, setNewOpportunity] = useState({
      title: '',
      date: '',
      location: '',
      description: '',
      volunteers: 0
    })

    const handleCreate = (e) => {
      e.preventDefault()
      const id = opportunities.length + 1
      setOpportunities([...opportunities, { ...newOpportunity, id }])
      alert('New opportunity created successfully!')
      setCurrentView('main')
    }

    return (
      <div className="container mx-auto py-8">
        <Button 
          className="mb-4"
          onClick={() => setCurrentView('main')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Opportunities
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Create New Opportunity</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input 
                    type="text" 
                    id="title" 
                    value={newOpportunity.title} 
                    onChange={(e) => setNewOpportunity({...newOpportunity, title: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <Input 
                    type="text" 
                    id="date" 
                    value={newOpportunity.date} 
                    onChange={(e) => setNewOpportunity({...newOpportunity, date: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <Input 
                    type="text" 
                    id="location" 
                    value={newOpportunity.location} 
                    onChange={(e) => setNewOpportunity({...newOpportunity, location: e.target.value})}
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <Textarea 
                    id="description" 
                    value={newOpportunity.description} 
                    onChange={(e) => setNewOpportunity({...newOpportunity, description: e.target.value})}
                    rows={4} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Create Opportunity</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">ImpactConnect</a>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Opportunities</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Organizations</a>
              {userType ? (
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
                  setUserType(null)
                  setCurrentView('main')
                }}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setCurrentView('login')}>Login</Button>
              )}
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Opportunities</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Organizations</a>
            {userType ? (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
                setUserType(null)
                setCurrentView('main')
              }}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setCurrentView('login')}>Login</Button>
            )}
          </nav>
        </div>
      )}

      <main>
        {currentView === 'login' ? (
          <LoginPage />
        ) : userType === 'volunteer' ? (
          currentView === 'main' ? (
            <VolunteerDashboard />
          ) : currentView === 'application' ? (
            <ApplicationForm />
          ) : currentView === 'groupChat' ? (
            <GroupChat />
          ) : (
            <LandingPage />
          )
        ) : userType === 'organization' ? (
          currentView === 'main' ? (
            <OrganizationDashboard />
          ) : currentView === 'reviewApplication' ? (
            <ReviewApplication />
          ) : currentView === 'groupChat' ? (
            <GroupChat />
          ) : currentView === 'manageOpportunity' ? (
            <ManageOpportunity />
          ) : currentView === 'createOpportunity' ? (
            <CreateOpportunity />
          ) : (
            <LandingPage />
          )
        ) : (
          <LandingPage />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ImpactConnect</h3>
              <p>Connecting volunteers with meaningful opportunities.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Find Opportunities</a></li>
                <li><a href="#" className="hover:text-blue-400">For Organizations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>Email: info@impactconnect.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 ImpactConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}