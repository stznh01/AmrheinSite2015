var aicDatabase = {
	nodes: [
		{name: 'Amrhein Gross Balance', value: 80, group: 1},

		{name: 'Growth Fund', value: 20, group: 2},
		{name: 'Income Fund', value: 16, group: 2},
		{name: 'Balance Fund', value: 13, group: 2},
		{name: 'Sml Cap Fund', value: 11, group: 2},

		{name: 'AGU', value: 1, group: 3},
		{name: 'COST', value: 2, group: 3},
		{name: 'XOM', value: 4, group: 3},
		{name: 'GILD', value: 5, group: 3},
		{name: 'GOOG', value: 8, group: 3},

		{name: 'APD', value: 5, group: 4},
		{name: 'HD', value: 2, group: 4},
		{name: 'IBM', value: 3, group: 4},
		{name: 'JNJ', value: 6, group: 4},

		{name: 'FAGIX', value: 1, group: 5},
		{name: 'MCD', value: 3, group: 5},
		{name: 'MSFT', value: 3, group: 5},
		{name: 'SYK', value: 6, group: 5},

		{name: 'ATU', value: 1, group: 6},
		{name: 'CBOE', value: 2, group: 6},
		{name: 'SAM', value: 7, group: 6},
		{name: 'SODA', value: 1, group: 6}

	],
	edges: [
		{ source: 0, target: 1, width: 5},
        { source: 0, target: 2, width: 5},
        { source: 0, target: 3, width: 5},
        { source: 0, target: 4, width: 5},

        { source: 1, target: 5, width: 3},
        { source: 1, target: 6, width: 3},
        { source: 1, target: 7, width: 3},
        { source: 1, target: 8, width: 3},
        { source: 1, target: 9, width: 3},

        { source: 2, target: 10, width: 3},
        { source: 2, target: 11, width: 3},
        { source: 2, target: 12, width: 3},
        { source: 2, target: 13, width: 3},

        { source: 3, target: 14, width: 3},
        { source: 3, target: 15, width: 3},
        { source: 3, target: 16, width: 3},
        { source: 3, target: 17, width: 3},

        { source: 4, target: 18, width: 3},
        { source: 4, target: 19, width: 3},
        { source: 4, target: 20, width: 3},
        { source: 4, target: 21, width: 3}

        // Industry Relationship
        ,{ source: 9, target: 12, width: 1 },
        { source: 12, target: 16, width: 1 },
        { source: 16, target: 9, width: 1 },
        { source: 15, target: 19, width: 1 }

        //fund internal relationship
        ,{ source: 5, target: 6, width: 1.5 },
        { source: 5, target: 7, width: 1.5 },
        { source: 5, target: 8, width: 1.5 },
        { source: 5, target: 9, width: 1.5 },
        { source: 6, target: 7, width: 1.5 },
        { source: 6, target: 8, width: 1.5 },
        { source: 6, target: 9, width: 1.5 },
        { source: 7, target: 8, width: 1.5 },
        { source: 7, target: 9, width: 1.5 },
        { source: 8, target: 9, width: 1.5 }

        ,{ source: 10, target: 11, width: 1.5 },
        { source: 10, target: 12, width: 1.5 },
        { source: 10, target: 13, width: 1.5 },
        { source: 11, target: 12, width: 1.5 },
        { source: 11, target: 13, width: 1.5 },
        { source: 12, target: 13, width: 1.5 }

        ,{ source: 14, target: 15, width: 1.5 },
        { source: 14, target: 16, width: 1.5 },
        { source: 14, target: 17, width: 1.5 },
        { source: 15, target: 16, width: 1.5 },
        { source: 15, target: 17, width: 1.5 },
        { source: 16, target: 17, width: 1.5 }

        ,{ source: 18, target: 19, width: 1.5 },
        { source: 18, target: 20, width: 1.5 },
        { source: 18, target: 21, width: 1.5 },
        { source: 19, target: 20, width: 1.5 },
        { source: 19, target: 21, width: 1.5 },
        { source: 20, target: 21, width: 1.5 }

	]
}