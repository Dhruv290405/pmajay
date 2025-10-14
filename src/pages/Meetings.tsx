import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Video,
  Calendar as CalendarIcon,
  Clock,
  Users,
  Plus,
  FileText,
  Download,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Meetings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingMeetings = [
    {
      id: "MTG-001",
      title: "Quarterly Fund Review - Q4 FY24",
      date: "2025-02-05",
      time: "10:00 AM - 12:00 PM",
      organizer: "Central Authority",
      participants: ["All State Coordinators", "District Officers"],
      type: "virtual",
      status: "scheduled",
    },
    {
      id: "MTG-002",
      title: "Maharashtra Project Status Review",
      date: "2025-01-28",
      time: "2:00 PM - 3:30 PM",
      organizer: "State Authority - Maharashtra",
      participants: ["District Officers - MH", "Implementing Agencies"],
      type: "hybrid",
      status: "scheduled",
    },
    {
      id: "MTG-003",
      title: "Technical Training Session",
      date: "2025-01-25",
      time: "11:00 AM - 1:00 PM",
      organizer: "Central IT Team",
      participants: ["All Portal Users"],
      type: "virtual",
      status: "scheduled",
    },
  ];

  const pastMeetings = [
    {
      id: "MTG-004",
      title: "Annual Planning Workshop 2024",
      date: "2025-01-15",
      duration: "3 hours",
      recording: true,
      minutes: true,
    },
    {
      id: "MTG-005",
      title: "Mid-Year Review Meeting",
      date: "2024-12-20",
      duration: "2 hours",
      recording: true,
      minutes: true,
    },
  ];

  const auditLogs = [
    { action: "Meeting Scheduled", user: "Central Authority", timestamp: "2025-01-20 10:30 AM", meeting: "MTG-001" },
    { action: "Participants Added", user: "State Coordinator - MH", timestamp: "2025-01-19 3:45 PM", meeting: "MTG-002" },
    { action: "Meeting Concluded", user: "System", timestamp: "2025-01-15 2:00 PM", meeting: "MTG-004" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Meetings & Collaboration</h1>
              <p className="text-muted-foreground">
                Schedule meetings, conduct reviews, and collaborate across teams
              </p>
            </div>
            <Button variant="gov">
              <Plus className="w-4 h-4 mr-2" />
              Schedule New Meeting
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar & Quick Stats */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={cn("pointer-events-auto rounded-md border w-full")}
                />
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Meeting Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">This Month</span>
                  </div>
                  <span className="text-lg font-bold">12</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">Total Hours</span>
                  </div>
                  <span className="text-lg font-bold">28</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">Participants</span>
                  </div>
                  <span className="text-lg font-bold">245</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meetings List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Meetings */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Upcoming Meetings
                </CardTitle>
                <CardDescription>Scheduled meetings and events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{meeting.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {meeting.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {meeting.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {meeting.type === "virtual" ? "Virtual" : "Hybrid"}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">{meeting.status}</Badge>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium text-foreground">Organized by:</span> {meeting.organizer}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Participants:</span>{" "}
                        {meeting.participants.join(", ")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="default">
                        <Video className="w-4 h-4 mr-2" />
                        Join Meeting
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        View Agenda
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Past Meetings */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Past Meetings
                </CardTitle>
                <CardDescription>Access recordings and meeting minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pastMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold mb-1">{meeting.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{meeting.date}</span>
                          <span>•</span>
                          <span>{meeting.duration}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {meeting.recording && (
                          <Badge variant="outline" className="text-xs">
                            <Video className="w-3 h-3 mr-1" />
                            Recording
                          </Badge>
                        )}
                        {meeting.minutes && (
                          <Badge variant="outline" className="text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            Minutes
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Recording
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Minutes
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Audit Logs */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Meeting Audit Logs
                </CardTitle>
                <CardDescription>Track all meeting-related activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {auditLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{log.action}</span>
                          <Badge variant="outline" className="text-xs">
                            {log.meeting}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          by {log.user} • {log.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
