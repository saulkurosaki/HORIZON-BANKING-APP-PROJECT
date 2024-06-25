import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankTabItem from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionsTable from "./TransactionsTable";

const RecentTransactions = ({
  accounts,
  transactions = [
    {
      id: "kjfldjsakfjkdjkdajf",
      $id: "kjfldjsakfjkdjkdajf",
      name: "Credit Card Payment",
      paymentChannel: "online",
      type: "credit",
      accountId: "1234567890",
      amount: 275,
      pending: false,
      category: "Payment",
      date: "Wed, Apr 24, 2:00 AM",
      image: "",
      $createdAt: "",
      channel: "online",
      senderBankId: "",
      receiverBankId: "",
    },
    {
      id: "kjfldjsakfjkdjkdajfasd",
      $id: "kjfldjsakfjkdjkdajfasd",
      name: "Credit Card Payment 2",
      paymentChannel: "online",
      type: "debit",
      accountId: "1234567890",
      amount: 575,
      pending: false,
      category: "Payment",
      date: "Wed, Apr 24, 2:00 AM",
      image: "",
      $createdAt: "",
      channel: "online",
      senderBankId: "",
      receiverBankId: "",
    },
  ],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>
        <Link
          href={`transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {accounts.map((account: Account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />

            <TransactionsTable transactions={transactions} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
