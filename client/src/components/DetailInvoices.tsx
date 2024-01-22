import { TopComponent } from "./TopComponent";
import { MiddleComponent } from "./MiddleComponent";

/**
 * Renders a detailed invoice view.
 * @param {string} status - The status of the invoice. Defaults to "pending".
 * @returns {JSX.Element} - The rendered React component representing the detailed invoice view.
 */
function DetailInvoices({
  status = "pending",
}: {
  status: string;
}): JSX.Element {
  /**
   * Returns a CSS class name based on the status prop value.
   * @returns {string} - The CSS class name.
   */
  const getStatusColor = (): string => {
    if (status === "paid") {
      return "text-green";
    } else if (status === "pending") {
      return "text-orange";
    } else {
      return "text-black font-bold";
    }
  };

  return (
    <div className="flex flex-col justify-center h-full w-[548px] items-center container mx-auto">
      <TopComponent getStatusColor={getStatusColor} status={status} />
      <MiddleComponent />
    </div>
  );
}

export default DetailInvoices;
