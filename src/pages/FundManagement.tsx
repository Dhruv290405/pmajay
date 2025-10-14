import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  IndianRupee,
  TrendingUp,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import fundFlowImage from "@/assets/fund-flow.png";

const FundManagement = () => {
  const [selectedScheme, setSelectedScheme] = useState("all");

  const fundFlow = [
    {
      level: "Central Government",
      allocated: "₹5,000 Cr",
      released: "₹4,200 Cr",
      percentage: 84,
      status: "active",
    },
    {
      level: "State (SNA)",
      allocated: "₹4,200 Cr",
      released: "₹3,800 Cr",
      percentage: 90,
      status: "active",
    },
    {
      level: "District Level",
      allocated: "₹3,800 Cr",
      released: "₹3,200 Cr",
      percentage: 84,
      status: "active",
    },
    {
      level: "Implementing Agencies",
      allocated: "₹3,200 Cr",
      utilized: "₹2,450 Cr",
      percentage: 77,
      status: "in-progress",
    },
  ];

  const approvalWorkflow = [
    { stage: "Draft Submission", status: "completed", count: 0 },
    { stage: "State Review", status: "in-progress", count: 15 },
    { stage: "Central Sanction", status: "pending", count: 42 },
    { stage: "Fund Disbursed", status: "completed", count: 1177 },
  ];

  const schemes = [
    {
      name: "Affordable Housing - Urban",
      sanctioned: "₹1,800 Cr",
      released: "₹1,500 Cr",
      utilized: "₹1,150 Cr",
      progress: 64,
      projects: 456,
    },
    {
      name: "Affordable Housing - Rural",
      sanctioned: "₹650 Cr",
      released: "₹520 Cr",
      utilized: "₹390 Cr",
      progress: 60,
      projects: 778,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fund Management</h1>
              <p className="text-muted-foreground">
                Track fund flow, approvals, and utilization across all levels
              </p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Fund Flow Visualization */}
        <Card className="mb-8 shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-primary" />
              Fund Flow: Centre → State → District → Agency
            </CardTitle>
            <CardDescription>Real-time tracking of fund movement across all levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {fundFlow.map((level, idx) => (
                  <div key={level.level}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {idx + 1}
                        </div>
                        <span className="font-semibold">{level.level}</span>
                      </div>
                      <Badge
                        variant={level.status === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {level.status}
                      </Badge>
                    </div>
                    <div className="ml-10">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          {level.utilized ? "Utilized" : "Released"}: {level.utilized || level.released}
                        </span>
                        <span className="font-medium">{level.percentage}%</span>
                      </div>
                      <Progress value={level.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Allocated: {level.allocated}
                      </p>
                    </div>
                    {idx < fundFlow.length - 1 && (
                      <div className="ml-3 mt-3 mb-2">
                        <ArrowRight className="w-5 h-5 text-success" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={fundFlowImage}
                  alt="Fund Flow Diagram"
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Approval Workflow */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>Approval Workflow Status</CardTitle>
            <CardDescription>
              Color-coded status showing progress at each approval stage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {approvalWorkflow.map((stage) => (
                <Card
                  key={stage.stage}
                  className={`${
                    stage.status === "completed"
                      ? "bg-success/10 border-success"
                      : stage.status === "in-progress"
                      ? "bg-secondary/10 border-secondary"
                      : "bg-muted border-border"
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {stage.status === "completed" && (
                        <CheckCircle2 className="w-8 h-8 text-success" />
                      )}
                      {stage.status === "in-progress" && (
                        <Clock className="w-8 h-8 text-secondary" />
                      )}
                      {stage.status === "pending" && (
                        <AlertCircle className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <h4 className="font-semibold mb-2">{stage.stage}</h4>
                    <p className="text-2xl font-bold text-primary">{stage.count}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stage.status === "completed" ? "Completed" : "In Queue"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scheme-wise Utilization */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Scheme-wise Fund Utilization
            </CardTitle>
            <CardDescription>Detailed breakdown of funds by scheme category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {schemes.map((scheme) => (
                <div key={scheme.name} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{scheme.name}</h4>
                      <p className="text-sm text-muted-foreground">{scheme.projects} Active Projects</p>
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      {scheme.progress}% Utilized
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Sanctioned</p>
                      <p className="font-bold text-foreground">{scheme.sanctioned}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Released</p>
                      <p className="font-bold text-primary">{scheme.released}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Utilized</p>
                      <p className="font-bold text-success">{scheme.utilized}</p>
                    </div>
                  </div>

                  <Progress value={scheme.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FundManagement;
