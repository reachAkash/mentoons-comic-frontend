import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import Wordbreak from "./Wordbreak";

export interface PurchaseDialogProps {
  name: string | null;
}
const PurchaseDialog: React.FC<PurchaseDialogProps> = ({ name }) => {
  console.log(name);
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger ref={ref} asChild>
        <Button variant="outline" className="invisible" ref={ref}></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Continue watching <Wordbreak /> {name}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PurchaseDialog;
