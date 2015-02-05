var aicDatabase = {
	nodes: [
		{name: 'Amrhein Gross Balance', assets: 1694620.04 , cash: 451075.87, group: 1},

		{name: 'Growth Fund', assets: 643054.08 , cash: 192354.52, group: 2},
		{name: 'Income Fund', assets: 485733.08 , cash: 66620.16, group: 2},
		{name: 'Balance Fund', assets: 377917.45 , cash: 41433.82, group: 2},
		{name: 'Sml Cap Fund', assets: 187915.43 , cash: 150667.37, group: 2},

		// Index 5-11
                {name: 'AGU', assets: 57282.40 , cash: 0, group: 3},

		{name: 'COST', assets: 73000.00 , cash: 0, group: 3},
		{name: 'XOM', assets: 44790 , cash: 0, group: 3},
		{name: 'GILD', assets: 250608.40 , cash: 0, group: 3},
		{name: 'GOOG', assets: 56018.88 , cash: 0, group: 3},
                {name: 'GOOGL', assets: 56413.20 , cash: 0, group: 3},

                {name: 'PII', assets: 104941.20 , cash: 0, group: 3},

		// Index 12-20
                {name: 'APD', assets: 51835.68 , cash: 0, group: 4},
		{name: 'HD', assets: 31851.15 , cash: 0, group: 4},
		{name: 'IBM', assets: 61864.00 , cash: 0, group: 4},
		{name: 'JNJ', assets: 56968.95 , cash: 0, group: 4},

                {name: 'LMT', assets: 56799.00 , cash: 0, group: 4},
                {name: 'MMM', assets: 69056.40 , cash: 0, group: 4},
                {name: 'PEP', assets: 66731.00 , cash: 0, group: 4},
                {name: 'PG', assets: 68096.00 , cash: 0, group: 4},
                {name: 'UNH', assets: 22530.90 , cash: 0, group: 4},

		// Index 21-27
                {name: 'FAGIX', assets: 41328.97 , cash: 0, group: 5},
                {name: 'FIUIX', assets: 53549.38 , cash: 0, group: 5},
                {name: 'LCEIX', assets: 49687.42 , cash: 0, group: 5},
		{name: 'MCD', assets: 49770.38 , cash: 0, group: 5},
		{name: 'MSFT', assets: 82560.00 , cash: 0, group: 5},

		{name: 'SYK', assets: 64232.00 , cash: 0, group: 5},
                {name: 'VZ', assets: 40257.00 , cash: 0, group: 5},

		// Index 28-33
                {name: 'ATU', assets: 14220.00 , cash: 0, group: 6},
		{name: 'CBOE', assets: 55863.27 , cash: 0, group: 6},
                {name: 'FWRD', assets: 27258.00 , cash: 0, group: 6},

                {name: 'KKD', assets: 20013.75 , cash: 0, group: 6},
		{name: 'SAM', assets: 63202.00 , cash: 0, group: 6},
		{name: 'SODA', assets: 7954.80 , cash: 0, group: 6}

                // Liquidity nodes
                ,{name: 'Growth MMF', assets: 0, cash: 192354.52, group: 7},
                {name: 'Income MMF', assets: 0, cash: 66620.16, group: 7},
                {name: 'Balance MMF', assets: 0 , cash: 41433.82, group: 7},
                {name: 'Sml Cap MMF', assets: 0 , cash: 150667.37, group: 7}

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
                { source: 1, target: 10, width: 3},
                { source: 1, target: 11, width: 3},

                { source: 2, target: 12, width: 3},
                { source: 2, target: 13, width: 3},
                { source: 2, target: 14, width: 3},
                { source: 2, target: 15, width: 3},
                { source: 2, target: 16, width: 3},
                { source: 2, target: 17, width: 3},
                { source: 2, target: 18, width: 3},
                { source: 2, target: 19, width: 3},
                { source: 2, target: 20, width: 3},

                { source: 3, target: 21, width: 3},
                { source: 3, target: 22, width: 3},
                { source: 3, target: 23, width: 3},
                { source: 3, target: 24, width: 3},
                { source: 3, target: 25, width: 3},
                { source: 3, target: 26, width: 3},
                { source: 3, target: 27, width: 3},

                { source: 4, target: 28, width: 3},
                { source: 4, target: 29, width: 3},
                { source: 4, target: 30, width: 3},
                { source: 4, target: 31, width: 3},
                { source: 4, target: 32, width: 3},
                { source: 4, target: 33, width: 3}

                // Industry Relationship
                ,{ source: 9, target: 14, width: 1 },
                { source: 10, target: 14, width: 1 },
                { source: 9, target: 25, width: 1 },
                { source: 10, target: 25, width: 1 },
                { source: 14, target: 25, width: 1 },
                { source: 18, target: 31, width: 1 },
                { source: 18, target: 33, width: 1 }

                //fund internal relationship
                ,{ source: 5, target: 6, width: 1.5 },
                { source: 5, target: 7, width: 1.5 },
                { source: 5, target: 8, width: 1.5 },
                { source: 5, target: 9, width: 1.5 },
                { source: 5, target: 10, width: 1.5 },
                { source: 5, target: 11, width: 1.5 },
                { source: 6, target: 7, width: 1.5 },
                { source: 6, target: 8, width: 1.5 },
                { source: 6, target: 9, width: 1.5 },
                { source: 6, target: 10, width: 1.5 },
                { source: 6, target: 11, width: 1.5 },
                { source: 7, target: 8, width: 1.5 },
                { source: 7, target: 9, width: 1.5 },
                { source: 7, target: 10, width: 1.5 },
                { source: 7, target: 11, width: 1.5 },
                { source: 8, target: 9, width: 1.5 },
                { source: 8, target: 10, width: 1.5 },
                { source: 8, target: 11, width: 1.5 },
                { source: 9, target: 10, width: 3 },
                { source: 9, target: 11, width: 1.5 },
                { source: 10, target: 11, width: 1.5 }
                
                ,{ source: 12, target: 13, width: 1.5 },
                { source: 12, target: 14, width: 1.5 },
                { source: 12, target: 15, width: 1.5 },
                { source: 12, target: 16, width: 1.5 },
                { source: 12, target: 17, width: 1.5 },
                { source: 12, target: 18, width: 1.5 },
                { source: 12, target: 19, width: 1.5 },
                { source: 12, target: 20, width: 1.5 },
                { source: 13, target: 14, width: 1.5 },
                { source: 13, target: 15, width: 1.5 },
                { source: 13, target: 16, width: 1.5 },
                { source: 13, target: 17, width: 1.5 },
                { source: 13, target: 18, width: 1.5 },
                { source: 13, target: 19, width: 1.5 },
                { source: 13, target: 20, width: 1.5 },
                { source: 14, target: 15, width: 1.5 },
                { source: 14, target: 16, width: 1.5 },
                { source: 14, target: 17, width: 1.5 },
                { source: 14, target: 18, width: 1.5 },
                { source: 14, target: 19, width: 1.5 },
                { source: 14, target: 20, width: 1.5 },
                { source: 15, target: 16, width: 1.5 },
                { source: 15, target: 17, width: 1.5 },
                { source: 15, target: 18, width: 1.5 },
                { source: 15, target: 19, width: 1.5 },
                { source: 15, target: 20, width: 1.5 },
                { source: 16, target: 17, width: 1.5 },
                { source: 16, target: 18, width: 1.5 },
                { source: 16, target: 19, width: 1.5 },
                { source: 16, target: 20, width: 1.5 },
                { source: 17, target: 18, width: 1.5 },
                { source: 17, target: 19, width: 1.5 },
                { source: 17, target: 20, width: 1.5 },
                { source: 18, target: 19, width: 1.5 },
                { source: 18, target: 20, width: 1.5 },
                { source: 19, target: 20, width: 1.5 }

                ,{ source: 21, target: 22, width: 1.5 },
                { source: 21, target: 23, width: 1.5 },
                { source: 21, target: 24, width: 1.5 },
                { source: 21, target: 25, width: 1.5 },
                { source: 21, target: 26, width: 1.5 },
                { source: 21, target: 27, width: 1.5 },
                { source: 22, target: 23, width: 1.5 },
                { source: 22, target: 24, width: 1.5 },
                { source: 22, target: 25, width: 1.5 },
                { source: 22, target: 26, width: 1.5 },
                { source: 22, target: 27, width: 1.5 },
                { source: 23, target: 24, width: 1.5 },
                { source: 23, target: 25, width: 1.5 },
                { source: 23, target: 26, width: 1.5 },
                { source: 23, target: 27, width: 1.5 },
                { source: 24, target: 25, width: 1.5 },
                { source: 24, target: 26, width: 1.5 },
                { source: 24, target: 27, width: 1.5 },
                { source: 25, target: 26, width: 1.5 },
                { source: 25, target: 27, width: 1.5 },
                { source: 26, target: 27, width: 1.5 }

                ,{ source: 28, target: 29, width: 1.5 },
                { source: 28, target: 30, width: 1.5 },
                { source: 28, target: 31, width: 1.5 },
                { source: 28, target: 32, width: 1.5 },
                { source: 28, target: 33, width: 1.5 },
                { source: 29, target: 30, width: 1.5 },
                { source: 29, target: 31, width: 1.5 },
                { source: 29, target: 32, width: 1.5 },
                { source: 29, target: 33, width: 1.5 },
                { source: 30, target: 31, width: 1.5 },
                { source: 30, target: 32, width: 1.5 },
                { source: 30, target: 33, width: 1.5 },
                { source: 31, target: 32, width: 1.5 },
                { source: 31, target: 33, width: 1.5 },
                { source: 32, target: 33, width: 1.5 }

                // cash nodes
                ,{ source: 1, target: 34, width: 5 },
                { source: 2, target: 35, width: 5 },
                { source: 3, target: 36, width: 5 },
                { source: 4, target: 37, width: 5 }

	]
}