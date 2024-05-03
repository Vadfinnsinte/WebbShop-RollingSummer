const products = [
    {
      name: "Elite Series Pro Rollerblades",
      price: 899,
      description: "Top-of-the-line rollerblades engineered for professional skaters.",
      category: "Rollerblades",
      key: 1,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Urban Cruiser Rollerblades",
      price: 549,
      description: "Sleek rollerblades designed for city commuting and urban exploration.",
      category: "Rollerblades",
      key: 2,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Freestyle Trick Rollerblades",
      price: 699,
      description: "Durable rollerblades built for freestyle skating and performing tricks.",
      category: "Rollerblades",
      key: 3,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Pro Model Skateboard Deck",
      price: 129,
      description: "Signature skateboard deck designed by professional skateboarder.",
      category: "Skateboards",
      key: 4,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Cruiser Longboard",
      price: 189,
      description: "Classic longboard perfect for cruising and carving on hills.",
      category: "Skateboards",
      key: 5,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Compact Mini Cruiser",
      price: 99,
      description: "Mini cruiser skateboard ideal for short commutes and tight turns.",
      category: "Skateboards",
      key: 6,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Helmet with MIPS Technology",
      price: 79,
      description: "Protective helmet featuring Multi-Directional Impact Protection System for enhanced safety.",
      category: "Tillbehör",
      key: 7,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Bearings Set",
      price: 29,
      description: "High-performance skateboard bearings for smooth and fast rides.",
      category: "Tillbehör",
      key: 8,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Tool and T-Tool Combo",
      price: 19,
      description: "Convenient skate tool kit including a skateboard tool and a T-Tool for easy adjustments.",
      category: "Tillbehör",
      key: 9,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Speed Pro Inline Skates",
      price: 749,
      description: "Sleek and lightweight inline skates designed for speed and agility.",
      category: "Rollerblades",
      key: 10,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Kids Adjustable Rollerblades",
      price: 149,
      description: "Adjustable rollerblades perfect for growing children.",
      category: "Rollerblades",
      key: 11,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Fitness Inline Skates",
      price: 299,
      description: "Comfortable inline skates designed for fitness enthusiasts.",
      category: "Rollerblades",
      key: 12,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Pro Model Skateboard Trucks",
      price: 59,
      description: "High-quality skateboard trucks engineered for professional performance.",
      category: "Skateboards",
      key: 13,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Wheels Set",
      price: 39,
      description: "Durable skateboard wheels perfect for street and park skating.",
      category: "Skateboards",
      key: 14,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Grip Tape",
      price: 9,
      description: "Premium grip tape for skateboard decks, providing superior traction and durability.",
      category: "Skateboards",
      key: 15,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Inline Skates Protective Gear Set",
      price: 99,
      description: "Complete protective gear set for inline skaters, including knee pads, elbow pads, and wrist guards.",
      category: "Tillbehör",
      key: 16,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Riser Pads",
      price: 7,
      description: "Durable riser pads for skateboard decks, reducing wheel bite and enhancing stability.",
      category: "Tillbehör",
      key: 17,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Skateboard Bushings Kit",
      price: 14,
      description: "Complete bushings kit for skateboard trucks, allowing riders to customize their ride.",
      category: "Tillbehör",
      key: 18,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Urban Commuter Skateboard Backpack",
      price: 69,
      description: "Stylish and functional skateboard backpack designed for urban commuters.",
      category: "Tillbehör",
      key: 19,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    },
    {
      name: "Professional Inline Skate Bearings",
      price: 49,
      description: "Premium inline skate bearings for professional skaters, providing unparalleled speed and performance.",
      category: "Tillbehör",
      key: 20,
      picture: "//www.jollyroom.se/storage/77C2BA1A663D4C0ED4080D4D0321BFFF286491A8F1E4AB92D692FBA42215365F/377a93d79d89480bb46548b6a6d28f86/jpg/media/6909796aa4d14e4dae292046bfa5e898/07221900T83230-2877_1.jpg"
    }
  ];

  export {products}