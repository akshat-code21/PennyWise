import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addExpense } from "@/features/expenses/expensesSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/hooks/use-toast";
import axios from "axios";
import Loader from "@/components/ui/loader";

interface ExpenseFormData {
  description: string;
  amount: string;
  category: string;
}

export type Expense = {
  id: string;
  description: string;
  category: string;
  createdAt: string;
  amount: number;
};

const categories = [
  { value: "Shopping", label: "Shopping" },
  { value: "Health", label: "Health" },
  { value: "Travel", label: "Travel" },
  { value: "Food", label: "Food" },
  { value: "Entertainment", label: "Entertainment" },
];

const buttons = [
  { path: "/dashboard", label: "Home" },
  { path: "/dashboard/detailedExpenses", label: "Expenses" },
  { path: "/dashboard/insights", label: "Insights" },
  { path: "/dashboard/savingTips", label: "Tips" }
];

export default function Buttons() {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState<ExpenseFormData>({
    description: "",
    amount: "",
    category: "",
  });
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCategorySelect = (selectedValue: string) => {
    setFormData((prev) => ({
      ...prev,
      category:
        selectedValue.charAt(0).toUpperCase() +
        selectedValue.slice(1).toLowerCase(),
    }));
    setValue(selectedValue);
    setOpen(false);
  };
  const handleSaveExpense = async () => {
    try {
      if (!formData.description || !formData.amount || !formData.category) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all fields",
        });
        return;
      }

      const amountNumber = parseFloat(formData.amount);
      if (isNaN(amountNumber)) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter a valid amount",
        });
        return;
      }

      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Authentication token not found",
        });
        return;
      }
      //@ts-ignore
      const expenseData: Expense = {
        description: formData.description,
        category: formData.category,
        createdAt: new Date().toISOString(),
        amount: amountNumber,
      };

      const response = await axios.post(
        "https://pennywise-backend-ts.onrender.com/api/v1/expenses",
        expenseData,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      const savedExpense = response.data;

      dispatch(
        addExpense({
          ...expenseData,
          id: savedExpense._id,
        })
      );

      window.dispatchEvent(new Event("expense-added"));

      setModalOpen(false);
      setFormData({ description: "", amount: "", category: "" });
      toast({
        title: "Success",
        description: "Expense saved successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to save expense",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (IsLoading) {
    return (
      <div className="flex items-center justify-center mx-auto my-40">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-2 sm:p-3 md:p-4">
      {buttons.map((button, index) => (
        <Button
          key={index}
          asChild
          className={cn(
            "text-xs sm:text-sm md:text-base bg-chrome-200 text-black hover:bg-green-500 hover:text-white transition-all",
            "px-2 sm:px-3 md:px-4 py-1 sm:py-2",
            "min-w-[80px] sm:min-w-[100px] md:min-w-[120px]",
            "whitespace-nowrap overflow-hidden text-ellipsis",
            isActive(button.path) && "bg-green-500 text-white"
          )}
        >
          <Link to={button.path}>{button.label}</Link>
        </Button>
      ))}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setModalOpen(true)}
            className="text-xs sm:text-sm md:text-base bg-chrome-200 text-black hover:bg-green-500 hover:text-white transition-all
                     px-2 sm:px-3 md:px-4 py-1 sm:py-2
                     min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
          >
            Add Expense
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Add a New Expense
            </DialogTitle>
            <DialogDescription>
              Enter the details of the expense you want to add.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Expense Name"
              className="w-full px-4 py-3 border rounded-md"
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between h-12"
                >
                  {value
                    ? categories.find((category) => category.value === value)
                        ?.label
                    : "Select Category"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput
                    placeholder="Search category..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value}
                          onSelect={handleCategorySelect}
                        >
                          {category.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === category.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="w-full px-4 py-3 border rounded-md"
            />
            <Button onClick={handleSaveExpense}>Save Expense</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
