const staticList = [
    // People (20 records)
    {
        id: 1,
        type: "person",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        status: "active",
        timeAgo: "2 minutes ago",
    },
    {
        id: 2,
        type: "person",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        status: "offline",
        timeAgo: "10 minutes ago",
    },
    {
        id: 3,
        type: "person",
        name: "Carol Lee",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        status: "away",
        timeAgo: "1 hour ago",
    },
    {
        id: 4,
        type: "person",
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        status: "active",
        timeAgo: "5 minutes ago",
    },
    {
        id: 5,
        type: "person",
        name: "Eva Brown",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        status: "busy",
        timeAgo: "20 minutes ago",
    },
    {
        id: 6,
        type: "person",
        name: "Frank Wilson",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        status: "active",
        timeAgo: "3 minutes ago",
    },
    {
        id: 7,
        type: "person",
        name: "Grace Miller",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        status: "deactivated",
        timeAgo: "2 hours ago",
    },
    {
        id: 8,
        type: "person",
        name: "Henry Davis",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        status: "active",
        timeAgo: "1 minute ago",
    },
    {
        id: 9,
        type: "person",
        name: "Ivy Martinez",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        status: "offline",
        timeAgo: "15 minutes ago",
    },
    {
        id: 10,
        type: "person",
        name: "Jack Lee",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        status: "active",
        timeAgo: "7 minutes ago",
    },
    {
        id: 11,
        type: "person",
        name: "Karen Clark",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        status: "deactivated",
        timeAgo: "3 hours ago",
    },
    {
        id: 12,
        type: "person",
        name: "Leo Turner",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        status: "active",
        timeAgo: "4 minutes ago",
    },
    {
        id: 13,
        type: "person",
        name: "Mia Harris",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        status: "offline",
        timeAgo: "25 minutes ago",
    },
    {
        id: 14,
        type: "person",
        name: "Nathan Young",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        status: "active",
        timeAgo: "6 minutes ago",
    },
    {
        id: 15,
        type: "person",
        name: "Olivia King",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        status: "deactivated",
        timeAgo: "4 hours ago",
    },
    {
        id: 16,
        type: "person",
        name: "Paul Wright",
        avatar: "https://randomuser.me/api/portraits/men/16.jpg",
        status: "active",
        timeAgo: "8 minutes ago",
    },
    {
        id: 17,
        type: "person",
        name: "Quinn Scott",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        status: "offline",
        timeAgo: "30 minutes ago",
    },
    {
        id: 18,
        type: "person",
        name: "Ryan Adams",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        status: "active",
        timeAgo: "9 minutes ago",
    },
    {
        id: 19,
        type: "person",
        name: "Sophia Nelson",
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        status: "deactivated",
        timeAgo: "5 hours ago",
    },
    {
        id: 20,
        type: "person",
        name: "Tom Baker",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        status: "active",
        timeAgo: "10 minutes ago",
    },

    // Chat/File (20 records)
    {
        id: 21,
        type: "file",
        name: "Project Plan",
        fileType: "docx",
        category: "Documents",
        status: "added",
        timeAgo: "1 hour ago"
    },
    {
        id: 22,
        type: "file",
        name: "Team Photo",
        fileType: "image",
        category: "Images",
        status: "edited",
        timeAgo: "2 hours ago"
    },
    {
        id: 23,
        type: "file",
        name: "Presentation",
        fileType: "pptx",
        category: "Slides",
        status: "added",
        timeAgo: "30 minutes ago"
    },
    {
        id: 24,
        type: "file",
        name: "Budget Sheet",
        fileType: "xlsx",
        category: "Finance",
        status: "edited",
        timeAgo: "3 hours ago"
    },
    {
        id: 25,
        type: "file",
        name: "Vacation Video",
        fileType: "video",
        category: "Videos",
        status: "added",
        timeAgo: "4 hours ago"
    },
    {
        id: 26,
        type: "file",
        name: "Design Folder",
        fileType: "folder",
        category: "Designs",
        status: "added",
        timeAgo: "5 hours ago"
    },
    {
        id: 27,
        type: "file",
        name: "Invoice",
        fileType: "docx",
        category: "Documents",
        status: "edited",
        timeAgo: "6 hours ago"
    },
    {
        id: 28,
        type: "file",
        name: "Logo",
        fileType: "image",
        category: "Images",
        status: "added",
        timeAgo: "7 hours ago"
    },
    {
        id: 29,
        type: "file",
        name: "Quarterly Report",
        fileType: "xlsx",
        category: "Finance",
        status: "edited",
        timeAgo: "8 hours ago"
    },
    {
        id: 30,
        type: "file",
        name: "Training Video",
        fileType: "video",
        category: "Videos",
        status: "added",
        timeAgo: "9 hours ago"
    },
    {
        id: 31,
        type: "file",
        name: "Marketing Folder",
        fileType: "folder",
        category: "Marketing",
        status: "added",
        timeAgo: "10 hours ago"
    },
    {
        id: 32,
        type: "file",
        name: "Resume",
        fileType: "docx",
        category: "Documents",
        status: "added",
        timeAgo: "11 hours ago"
    },
    {
        id: 33,
        type: "file",
        name: "Banner",
        fileType: "image",
        category: "Images",
        status: "edited",
        timeAgo: "12 hours ago"
    },
    {
        id: 34,
        type: "file",
        name: "Sales Report",
        fileType: "xlsx",
        category: "Sales",
        status: "added",
        timeAgo: "13 hours ago"
    },
    {
        id: 35,
        type: "file",
        name: "Webinar Video",
        fileType: "video",
        category: "Videos",
        status: "edited",
        timeAgo: "14 hours ago"
    },
    {
        id: 36,
        type: "file",
        name: "HR Folder",
        fileType: "folder",
        category: "HR",
        status: "added",
        timeAgo: "15 hours ago"
    },
    {
        id: 37,
        type: "file",
        name: "Offer Letter",
        fileType: "docx",
        category: "Documents",
        status: "edited",
        timeAgo: "16 hours ago"
    },
    {
        id: 38,
        type: "file",
        name: "Profile Pic",
        fileType: "image",
        category: "Images",
        status: "added",
        timeAgo: "17 hours ago"
    },
    {
        id: 39,
        type: "file",
        name: "Expense Sheet",
        fileType: "xlsx",
        category: "Finance",
        status: "edited",
        timeAgo: "18 hours ago"
    },
    {
        id: 40,
        type: "file",
        name: "Demo Video",
        fileType: "video",
        category: "Videos",
        status: "added",
        timeAgo: "19 hours ago"
    },

    // Lists (10 records)
    {
        id: 41,
        type: "list",
        name: "Groceries",
        category: "Shopping",
        numberOfItems: 15
    },
    {
        id: 42,
        type: "list",
        name: "Books to Read",
        category: "Personal",
        numberOfItems: 8
    },
    {
        id: 43,
        type: "list",
        name: "Project Tasks",
        category: "Work",
        numberOfItems: 20
    },
    {
        id: 44,
        type: "list",
        name: "Movies to Watch",
        category: "Entertainment",
        numberOfItems: 12
    },
    {
        id: 45,
        type: "list",
        name: "Packing List",
        category: "Travel",
        numberOfItems: 10
    },
    {
        id: 46,
        type: "list",
        name: "Birthday Gifts",
        category: "Personal",
        numberOfItems: 5
    },
    {
        id: 47,
        type: "list",
        name: "Meeting Agenda",
        category: "Work",
        numberOfItems: 7
    },
    {
        id: 48,
        type: "list",
        name: "Workout Plan",
        category: "Fitness",
        numberOfItems: 6
    },
    {
        id: 49,
        type: "list",
        name: "Recipe Ideas",
        category: "Cooking",
        numberOfItems: 9
    },
    {
        id: 50,
        type: "list",
        name: "Holiday Destinations",
        category: "Travel",
        numberOfItems: 4
    },

    // Chat Messages (10 records)
    {
        id: 51,
        type: "chat",
        name: "Software Engineering Team",
        lastMessage: "Don't forget the meeting at 10 AM tomorrow.",
    },
    {
        id: 52,
        type: "chat",
        name: "Marketing Team",
        lastMessage: "The new campaign looks great!",
    },
    {
        id: 53,
        type: "chat",
        name: "HR Department",
        lastMessage: "Please submit your timesheets by end of day.",
    },
    {
        id: 54,
        type: "chat",
        name: "Project Alpha",
        lastMessage: "The client approved the designs.",
    },
    {
        id: 55,
        type: "chat",
        name: "Family Group",
        lastMessage: "Dinner at 7 PM tonight?",
    },
    {
        id: 56,
        type: "chat",
        name: "Book Club",
        lastMessage: "Next meeting is on Friday.",
    },
    {
        id: 57,
        type: "chat",
        name: "Gym Buddies",
        lastMessage: "Who's up for a workout this weekend?",
    },
    {
        id: 58,
        type: "chat",
        name: "Travel Plans",
        lastMessage: "Tickets booked for the trip!",
    },
    {
        id: 59,
        type: "chat",
        name: "Cooking Enthusiasts",
        lastMessage: "New recipe ideas to try out.",
    },
    {
        id: 60,
        type: "chat",
        name: "Movie Fans",
        lastMessage: "Let's watch the new release this weekend.",
    }
];

export default staticList;