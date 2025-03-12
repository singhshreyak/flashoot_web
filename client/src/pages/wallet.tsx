import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { type User } from "@shared/schema";
import { Wallet2, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function Wallet() {
  // For demo, using user ID 1
  const { data: user } = useQuery<User>({
    queryKey: ["/api/users/1"],
  });

  const transactions = [
    { id: 1, type: "credit", amount: 500, description: "Referral bonus" },
    { id: 2, type: "debit", amount: 1999, description: "Instant booking payment" },
    { id: 3, type: "credit", amount: 1000, description: "Wallet top-up" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">My Wallet</h1>
        <p className="text-muted-foreground">
          Manage your wallet balance and view transactions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Wallet2 className="h-8 w-8 text-primary" />
              <div>
                <p className="text-3xl font-bold">₹{user?.walletBalance || 0}</p>
                <p className="text-sm text-muted-foreground">Available balance</p>
              </div>
            </div>
            <Button className="w-full mt-6">Top Up Wallet</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {transaction.type === "credit" ? (
                      <ArrowDownLeft className="h-5 w-5 text-green-500" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className={transaction.type === "credit" ? "text-green-500" : "text-red-500"}>
                    {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
