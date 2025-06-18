
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "@/components/tabs/OverviewTab";
import { ApiKeysTab } from "@/components/tabs/ApiKeysTab";
import { WebhooksTab } from "@/components/tabs/WebhooksTab";
import { EventsTab } from "@/components/tabs/EventsTab";
import { LogsTab } from "@/components/tabs/LogsTab";
import { AppsTab } from "@/components/tabs/AppsTab";

const Index = () => {
    const [selectedTab, setSelectedTab] = useState("overview");

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto flex">


                <div className="flex-1 p-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Developers</h1>

                        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-5">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="api-keys">API keys</TabsTrigger>
                                <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                                <TabsTrigger value="events">Events</TabsTrigger>
                                <TabsTrigger value="logs">Logs</TabsTrigger>
                                {/*<TabsTrigger value="apps">Apps</TabsTrigger>*/}
                            </TabsList>

                            <TabsContent value="overview" className="mt-6">
                                <OverviewTab />
                            </TabsContent>

                            <TabsContent value="api-keys" className="mt-6">
                                <ApiKeysTab />
                            </TabsContent>

                            <TabsContent value="webhooks" className="mt-6">
                                <WebhooksTab />
                            </TabsContent>

                            <TabsContent value="events" className="mt-6">
                                <EventsTab />
                            </TabsContent>

                            <TabsContent value="logs" className="mt-6">
                                <LogsTab />
                            </TabsContent>

                            <TabsContent value="apps" className="mt-6">
                                <AppsTab />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
