import { columns } from "@/components/expenses/columns";
import { DataTable } from "@/components/expenses/table";
import { Button } from "@/components/ui/button";
import { ExpensesService } from "@/services/expenses";

export default async function Home() {
  const expensesService = await ExpensesService.init();

  const expenses = expensesService.getExpenses();

  return (
    <div className="container space-y-4 py-4">
      <h1 className="text-3xl font-medium">My expenses</h1>
      <DataTable columns={columns} data={expenses} />
    </div>
  );
}
