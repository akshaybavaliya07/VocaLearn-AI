import { companionSchema, CompanionFormValues } from "@/validations/companion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const CompanionForm = () => {
  const form = useForm<CompanionFormValues>({
    resolver: zodResolver(companionSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 5,
    },
  });

  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm