import Button from "./Button";
/**
 * Renders a container with a status indicator and three buttons.
 * The status indicator's color is determined by the `getStatusColor` function,
 * and the text inside the indicator is based on the `status` prop.
 * The buttons are instances of the `Button` component, each with a different color prop.
 *
 * @param getStatusColor - A function that returns a string representing the color of the status indicator.
 * @param status - A string representing the current status.
 * @returns JSX.Element representing the rendered `TopComponent`.
 */
export function TopComponent({
  getStatusColor,
  status,
}: {
  getStatusColor: () => string;
  status: string;
}): JSX.Element {
  const statusText = status === "draft" ? "Draft" : status;

  return (
    <div className="w-[548px] h-[88px] container-lg mx-auto shadow flex justify-center items-center rounded-md p-4">
      <div className="flex items-center mr-auto">
        <span>Status</span>
        <div
          className={`ml-2 font-bold capitalize rounded bg-[#F3FDFA] p-2 w-[104px] h-[40px] text-center ${getStatusColor()}`}
        >
          {statusText}
        </div>
      </div>
      {/* pill */}
      <Button color="slate">Edit</Button>
      <Button color="rose">Delete</Button>
      <Button color="voilet">Mark as Paid</Button>
    </div>
  );
}
