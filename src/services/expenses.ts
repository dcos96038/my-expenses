import { Expense } from "@/models/expense";

export class ExpensesService {
  private constructor(private readonly expenses: Expense[]) {}

  static async init(): Promise<ExpensesService> {
    const apiUrl = process.env.GOOGLE_SHEETS_URL;

    if (!apiUrl) {
      throw new Error("Missing Google Sheets URL");
    }

    const response = await fetch(apiUrl);
    const text = await response.text();

    const expenses = text
      .split("\n")
      .slice(1)
      .map((row) => {
        const [date, description, amount, category] = row.split("\t");
        return {
          date,
          amount: parseFloat(amount),
          description,
          category,
        };
      });

    return new ExpensesService(expenses);
  }

  getExpenses() {
    return this.expenses;
  }

  getCategories() {
    const categories = new Set<string>();
    this.expenses.forEach((expense) => categories.add(expense.category));
    return Array.from(categories);
  }
}
