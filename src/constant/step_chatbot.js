export const stepChatbot = [
  {
    id: "Greet",
    message: "Xin chào, chào mừng bạn đến với Vlancer",
    trigger: "Ask Name",
  },
  {
    id: "Ask Name",
    message: "Tôi có thể giúp gì được cho bạn?",
    trigger: "Displaying options to ques",
  },
  // {
  //   id: "Waiting user input for name",
  //   user: true,
  //   trigger: "Asking options to eat"
  // },
  // {
  //   id: "Asking options to eat",
  //   message: "Hi {previousValue}, Please click on what you want to eat!",
  //   trigger: "Displaying options to eat"
  // },
  {
    id: "Displaying options to ques",
    options: [
      {
        value: "make money",
        label: "Hướng dẫn Freelancer kiếm tiền trên vLance.vn",
        trigger: "Asking for make money",
      },
      {
        value: "update profile",
        label: "Hướng dẫn Freelancer hoàn thiện hồ sơ",
        trigger: "Asking for update profile",
      },
      {
        value: "order project",
        label: "Hướng dẫn Freelancer chào giá dự án",
        trigger: "Asking for order project",
      },
    ],
  },
  {
    id: "Asking for make money",
    message: "Bạn có thể xem hướng dẫn làm việc trên vLance.vn tại đây:",
    trigger: "Asking for another question",
  },
  {
    id: "Asking for another question",
    message: "Bạn có cần hỗ trợ nào khác không",
    trigger: "Asking select option",
  },
  {
    id: "Asking select option",
    options: [
      {
        value: true,
        label: "Yes",
        trigger: "Displaying options to ques",
      },
      {
        value: "false",
        label: "No",
        trigger: "Done",
      },
    ],
  },
  {
    id: "Asking for update profile",
    message: "Bạn có thể xem hướng dẫn hoàn thiện hồ sơ cá nhân tại đây:",
    trigger: "Asking for another question",
  },

  {
    id: "Asking for order project",
    message: "Bạn có thể xem hướng dẫn ứng tuyển (chào giá) công việc tại đây:",
    trigger: "Asking for another question",
  },

  //  {
  //    id: "Adding Mushroom in Pizza",
  //    options: [
  //      {
  //        value: true,
  //        label: "Yes",
  //        trigger: () => {
  //          return "Asking for Corn in Pizza";
  //        },
  //      },
  //      {
  //        value: "false",
  //        label: "No",
  //        trigger: "Asking for Corn in Pizza",
  //      },
  //    ],
  //  },

  //  {
  //    id: "Adding Corn in Pizza",
  //    options: [
  //      {
  //        value: true,
  //        label: "Yes",
  //        trigger: () => {
  //          // props.eventHandler("corn");
  //          return "Asking for Veggies in Pizza";
  //        },
  //      },
  //      {
  //        value: "false",
  //        label: "No",
  //        trigger: "Asking for Veggies in Pizza",
  //      },
  //    ],
  //  },

  //  {
  //    id: "Asking for Veggies in Pizza",
  //    message: "Would you like to have veggies in your pizza",
  //    trigger: "Adding Veggies in Pizza",
  //  },

  //  {
  //    id: "Adding Veggies in Pizza",
  //    options: [
  //      {
  //        value: true,
  //        label: "Yes",
  //        trigger: () => {
  //          return "Done";
  //        },
  //      },
  //      {
  //        value: "false",
  //        label: "No",
  //        trigger: "Done",
  //      },
  //    ],
  //  },
  {
    id: "Done",
    message: "Cảm ơn bạn đã ủng hộ trang web !!",
    end: true,
  },
];
