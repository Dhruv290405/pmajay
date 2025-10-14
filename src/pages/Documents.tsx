import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Upload,
  Download,
  Eye,
  Clock,
  CheckCircle2,
  XCircle,
  Edit,
  FileCheck,
  Search,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const documents = [
    {
      id: "DOC-2025-001",
      name: "Perspective Plan 2024-2029 - Maharashtra",
      type: "PPA",
      uploadedBy: "State Authority",
      date: "2025-01-15",
      status: "approved",
      version: "v2.1",
    },
    {
      id: "DOC-2025-002",
      name: "Annual Action Plan FY 2024-25 - Gujarat",
      type: "AAP",
      uploadedBy: "State Authority",
      date: "2025-01-12",
      status: "pending",
      version: "v1.0",
    },
    {
      id: "DOC-2025-003",
      name: "Utilization Report Q3 - Delhi",
      type: "Report",
      uploadedBy: "District Officer",
      date: "2025-01-10",
      status: "under-review",
      version: "v1.2",
    },
    {
      id: "DOC-2025-004",
      name: "Project Progress Update - Pune District",
      type: "Progress",
      uploadedBy: "Implementing Agency",
      date: "2025-01-08",
      status: "approved",
      version: "v1.0",
    },
    {
      id: "DOC-2025-005",
      name: "Fund Requisition Form - Bangalore Urban",
      type: "Request",
      uploadedBy: "District Officer",
      date: "2025-01-05",
      status: "rejected",
      version: "v1.0",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "default";
      case "pending":
        return "secondary";
      case "under-review":
        return "outline";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "under-review":
        return <Eye className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Document Management</h1>
              <p className="text-muted-foreground">
                Upload, manage, and track all project documents and reports
              </p>
            </div>
            <Button variant="gov">
              <Upload className="w-4 h-4 mr-2" />
              Upload New Document
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Documents</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <FileText className="w-8 h-8 text-primary opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-success/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Approved</p>
                  <p className="text-2xl font-bold text-success">892</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-secondary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
                  <p className="text-2xl font-bold text-secondary">42</p>
                </div>
                <Clock className="w-8 h-8 text-secondary opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Rejected</p>
                  <p className="text-2xl font-bold text-destructive">15</p>
                </div>
                <XCircle className="w-8 h-8 text-destructive opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="shadow-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Document Repository</CardTitle>
                <CardDescription>
                  View and manage all project documents with version control
                </CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Documents</TabsTrigger>
                <TabsTrigger value="ppa">Perspective Plans</TabsTrigger>
                <TabsTrigger value="aap">Action Plans</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{doc.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {doc.version}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>ID: {doc.id}</span>
                            <span>•</span>
                            <span>Type: {doc.type}</span>
                            <span>•</span>
                            <span>Uploaded by: {doc.uploadedBy}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant={getStatusColor(doc.status)} className="gap-1">
                          {getStatusIcon(doc.status)}
                          <span className="capitalize">{doc.status.replace("-", " ")}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      {doc.status === "approved" && (
                        <Button size="sm" variant="success">
                          <FileCheck className="w-4 h-4 mr-2" />
                          E-Sign
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Document Upload Guidelines */}
        <Card className="mt-6 shadow-card bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Document Upload Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Accepted Formats:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>PDF documents (.pdf)</li>
                  <li>Word documents (.doc, .docx)</li>
                  <li>Excel spreadsheets (.xls, .xlsx)</li>
                  <li>Images (.jpg, .png)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Maximum file size: 10 MB</li>
                  <li>Documents must be properly named</li>
                  <li>Include version number in filename</li>
                  <li>E-signature required for final approval</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documents;
