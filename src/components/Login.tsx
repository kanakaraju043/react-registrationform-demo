import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardWithForm() {
  return (
    <Card className="w-[550px]">
      <CardHeader className="flex items-center">
        <CardTitle>Registration form</CardTitle>
        <CardDescription>This is basic registration forom</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="flex flex-col items-start space-y-2">
            <Label htmlFor="Email">Email</Label>
            <Input id="emal" placeholder="Email" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Label htmlFor="username">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Label htmlFor="username">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Label htmlFor="username">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Label htmlFor="username">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid w-full items-center gap-4 mb-2">
        <Button>Creat account</Button>
      </CardFooter>
    </Card>
  );
}
