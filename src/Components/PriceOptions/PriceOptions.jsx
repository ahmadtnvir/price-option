import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const price_options = [
    {
      id: "basic",
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to locker room",
        "Limited group fitness classes",
      ],
    },
    {
      id: "standard",
      name: "Standard Membership",
      price: 50,
      features: [
        "Access to all facilities",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Personal training sessions available (additional cost)",
      ],
    },
    {
      id: "premium",
      name: "Premium Membership",
      price: 80,
      features: [
        "Access to all facilities",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Access to swimming pool",
        "Discounts on personal training sessions",
      ],
    },
  ];

  return (
    <div>
      <h1>Best Price Option In The Town</h1>
      {
        price_options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
    </div>
  );
};

export default PriceOptions;


