let countiesArr = [
   // { county: "ALABAMA", code: "0100"},
   { county: "AUTAUGA COUNTY", code: "01001" },
   { county: "BALDWIN COUNTY", code: "01003" },
   { county: "BARBOUR COUNTY", code: "01005" },
   { county: "BIBB COUNTY", code: "01007" },
   { county: "BLOUNT COUNTY", code: "01009" },
   { county: "BULLOCK COUNTY", code: "01011" },
   { county: "BUTLER COUNTY", code: "01013" },
   { county: "CALHOUN COUNTY", code: "01015" },
   { county: "CHAMBERS COUNTY", code: "01017" },
   { county: "CHEROKEE COUNTY", code: "01019" },
   { county: "CHILTON COUNTY", code: "01021" },
   { county: "CHOCTAW COUNTY", code: "01023" },
   { county: "CLARKE COUNTY", code: "01025" },
   { county: "CLAY COUNTY", code: "01027" },
   { county: "CLEBURNE COUNTY", code: "01029" },
   { county: "COFFEE COUNTY", code: "01031" },
   { county: "COLBERT COUNTY", code: "01033" },
   { county: "CONECUH COUNTY", code: "01035" },
   { county: "COOSA COUNTY", code: "01037" },
   { county: "COVINGTON COUNTY", code: "01039" },
   { county: "CRENSHAW COUNTY", code: "01041" },
   { county: "CULLMAN COUNTY", code: "01043" },
   { county: "DALE COUNTY", code: "01045" },
   { county: "DALLAS COUNTY", code: "01047" },
   { county: "DEKALB COUNTY", code: "01049" },
   { county: "ELMORE COUNTY", code: "01051" },
   { county: "ESCAMBIA COUNTY", code: "01053" },
   { county: "ETOWAH COUNTY", code: "01055" },
   { county: "FAYETTE COUNTY", code: "01057" },
   { county: "FRANKLIN COUNTY", code: "01059" },
   { county: "GENEVA COUNTY", code: "01061" },
   { county: "GREENE COUNTY", code: "01063" },
   { county: "HA LE COUNTY", code: "01065" },
   { county: "HENRY COUNTY", code: "01067" },
   { county: "HOUSTON COUNTY", code: "01069" },
   { county: "JACKSON COUNTY", code: "01071" },
   { county: "JEFFERSON COUNTY", code: "01073" },
   { county: "LAMAR COUNTY", code: "01075" },
   { county: "LAUDERDALE COUNTY", code: "01077" },
   { county: "LAWRENCE COUNTY", code: "01079" },
   { county: "LEE COUNTY", code: "01081" },
   { county: "LIMESTONE COUNTY", code: "01083" },
   { county: "LOWNDES COUNTY", code: "01085" },
   { county: "MACON COUNTY", code: "01087" },
   { county: "MADISON COUNTY", code: "01089" },
   { county: "MARENGO COUNTY", code: "01091" },
   { county: "MARION COUNTY", code: "01093" },
   { county: "MARSHALL COUNTY", code: "01095" },
   { county: "MOBILE COUNTY", code: "01097" },
   { county: "MONROE COUNTY", code: "01099" },
   { county: "MONTGOMERY COUNTY", code: "01101" },
   { county: "MORGAN COUNTY", code: "01103" },
   { county: "PERRY COUNTY", code: "01105" },
   { county: "PICKENS COUNTY", code: "01107" },
   { county: "PIKE COUNTY", code: "01109" },
   { county: "RANDOLPH COUNTY", code: "01111" },
   { county: "RUSSELL COUNTY", code: "01113" },
   { county: "ST. CLAIR COUNTY", code: "01115" },
   { county: "SHELBY COUNTY", code: "01117" },
   { county: "SUMTER COUNTY", code: "01119" },
   { county: "TALLADEGA COUNTY", code: "01121" },
   { county: "TALLAPOOSA COUNTY", code: "01123" },
   { county: "TUSCALOOSA COUNTY", code: "01125" },
   { county: "WALKER COUNTY", code: "01127" },
   { county: "WASHINGTON COUNTY", code: "01129" },
   { county: "WILCOX COUNTY", code: "01131" },
   { county: "WINSTON COUNTY", code: "01133" },
   // { county: "ALASKA", code: "02000" },
   { county: "ALEUTIANS EAST BOROUGH", code: " 02013" },
   { county: "ALEUTIANS WEST CENSUS AREA", code: "02016" },
   { county: "ANCHORAGE BOROUGH", code: "02020" },
   { county: "BETHEL CENSUS AREA", code: "02050" },
   { county: "BRISTOL BAY BOROUGH", code: "02060" },
   { county: "DENALI BOROUGH", code: "02068" },
   { county: "DILLINGHAM CENSUS AREA", code: "02070" },
   { county: "FAIRB ANKS NORTH STAR BOROUGH", code: "02090" },
   { county: "HAINES BOROUGH", code: "02100" },
   { county: "JUNEAU BOROUGH", code: "02110" },
   { county: "KENAI PENINSULA BOR OUGH", code: "02122" },
   { county: "KETCHIKAN GATEWAY BOROUGH", code: "02130" },
   { county: "KODIAK ISLAND BOROUGH", code: "02150" },
   { county: "LAKE AND PENINSULA B OROUGH", code: "02164" },
   { county: "MATANUSKA-SUSITNA BOROUGH", code: "02170" },
   { county: "NOME CENSUS AREA", code: "02180" },
   { county: "NORTH SLOPE BOROUGH", code: "02185" },
   { county: "NORTHWEST ARCTIC BOROUGH", code: "02188" },
   { county: "PRINCE OF WALES-OUTER KETCHIKAN CENSUS AREA", code: "02201" },
   { county: "SITKA B OROUGH", code: "02220" },
   { county: "SKAGWAY-YAKUTAT-ANGOON CENSUS AREA", code: "02231" },
   { county: "SKAGWAY-HOONAH-ANGOON CENSUS AREA", code: "02232" },
   { county: "SOUTHEAST FAIRBANKS CENSUS AREA", code: "02240" },
   { county: "VALDEZ-CORDOVA CENSUS AREA", code: "02261" },
   { county: "WADE HAMPTON CENSUS AREA", code: "02270" },
   { county: "WRANGELL-PETERSBURG CENSUS AREA", code: "02280" },
   { county: "YAKUTAT BOROUGH", code: "02282" },
   { county: "YUKON-KOYUKUK CENSUS AREA", code: "02290" },
   // { county: "ARIZONA", code: "04000" },
   { county: "APACHE COUNTY", code: "04001" },
   { county: "COCHISE COUNTY", code: "04003" },
   { county: "COCONINO COUNTY", code: "04005" },
   { county: "GILA COUNTY", code: "04007" },
   { county: "GRAHAM COUNTY", code: "04009" },
   { county: "GREENLEE COUNTY", code: "04011" },
   { county: "LA PAZ COUNTY", code: "04012" },
   { county: "MARICOPA COUNTY", code: "04013" },
   { county: "MOHAVE COUNTY", code: "04015" },
   { county: "NAVAJO COUNTY", code: "04017" },
   { county: "PIMA COUNTY", code: "04019" },
   { county: "PINAL COUNTY", code: "04021" },
   { county: "SANTA CRUZ COUNTY", code: "04023" },
   { county: "YAVAPAI COUNTY", code: "04025" },
   { county: "YUMA COUNTY", code: "04027" },
   // { county: "ARKANSAS", code: "05000" },
   { county: "ARKANSAS COUNTY", code: "05001" },
   { county: "ASHLEY COUNTY", code: "05003" },
   { county: "BAXTER COUNTY", code: "05005" },
   { county: "BENTON COUNTY", code: "05007" },
   { county: "BOONE COUNTY", code: "05009" },
   { county: "BRADLEY COUNTY", code: "05011" },
   { county: "CALHOUN COUNTY", code: "05013" },
   { county: "CARROLL COUNTY", code: "05015" },
   { county: "CHICOT COUNTY", code: "05017" },
   { county: "CLARK COUNTY", code: "05019" },
   { county: "CLAY COUNTY", code: "05021" },
   { county: "CLEBURNE COUNTY", code: "05023" },
   { county: "CLEVELAND COUNTY", code: " 05025" },
   { county: "COLUMBIA COUNTY", code: "05027" },
   { county: "CONWAY COUNTY", code: "05029" },
   { county: "CRAIGHEAD COUNTY", code: "05031" },
   { county: "CRAWFOR D COUNTY", code: "05033" },
   { county: "CRITTENDEN COUNTY", code: "05035" },
   { county: "CROSS COUNTY", code: "05037" },
   { county: "DALLAS COUNTY", code: "05039" },
   { county: "DESHA COUNTY", code: "05041" },
   { county: "DREW COUNTY", code: "05043" },
   { county: "FAULKNER COUNTY", code: "05045" },
   { county: "FRANKLIN COUNTY", code: "05047" },
   { county: "FULTON COUNTY", code: "05049" },
   { county: "GARLAND COUNTY", code: "05051" },
   { county: "GRANT COUNTY", code: "05053" },
   { county: "GREENE COUNTY", code: "05055" },
   { county: "HEMPSTEAD COUNTY", code: "05057" },
   { county: "HOT SPRING COUNTY", code: "05059" },
   { county: "HOWARD COUNTY", code: "05061" },
   { county: "INDEPENDENCE COUNTY", code: "05063" },
   { county: "IZARD COUNTY", code: "05065" },
   { county: "JACKSON COUNTY", code: "05067" },
   { county: "JEFFERSON COUNTY", code: "05069" },
   { county: "JOHNSON COUNTY", code: "05071" },
   { county: "LAFAYETTE COUNTY", code: "05073" },
   { county: "LAWRENCE COUNTY", code: "05075" },
   { county: "LEE COUNTY", code: "05077" },
   { county: "LINCOLN COUNTY", code: "05079" },
   { county: "LITTLE RIVER COUNTY", code: "05081" },
   { county: "LOGAN COUNTY", code: "05083" },
   { county: "LONOKE COUNTY", code: "05085" },
   { county: "MADISON COUNTY", code: "05087" },
   { county: "MARION COUNTY", code: "05089" },
   { county: "MILLER COUNTY ", code: "05091" },
   { county: "MISSISSIPPI COUNTY", code: "05093" },
   { county: "MONROE COUNTY", code: "05095" },
   { county: "MONTGOMERY COUNTY", code: "05097" },
   { county: "NEVADA COUNTY", code: "05099" },
   { county: "NEWTON COUNTY", code: "05101" },
   { county: "OUACHITA COUNTY", code: "05103" },
   { county: "PERRY COUNTY", code: " 05105" },
   { county: "PHILLIPS COUNTY", code: "05107" },
   { county: "PIKE COUNTY", code: "05109" },
   { county: "POINSETT COUNTY", code: "05111" },
   { county: "POLK COUNTY", code: "05113" },
   { county: "POPE COUNTY", code: "05115" },
   { county: "PRAIRIE COUNTY", code: "05117" },
   { county: "PULASKI COUNTY", code: "05119" },
   { county: "R ANDOLPH COUNTY", code: "05121" },
   { county: "ST. FRANCIS COUNTY", code: "05123" },
   { county: "SALINE COUNTY", code: "05125" },
   { county: "SCOTT COUNTY", code: "05127" },
   { county: "SEARCY COUNTY", code: "05129" },
   { county: "SEBASTIAN COUNTY", code: "05131" },
   { county: "SEVIER COUNTY", code: "05133" },
   { county: "SHARP COUNTY ", code: "05135" },
   { county: "STONE COUNTY", code: "05137" },
   { county: "UNION COUNTY", code: "05139" },
   { county: "VAN BUREN COUNTY", code: "05141" },
   { county: "W ASHINGTON COUNTY", code: "05143" },
   { county: "WHITE COUNTY", code: "05145" },
   { county: "WOODRUFF COUNTY", code: "05147" },
   { county: "YELL COUNTY", code: "05149" },
   // { county: "CALIFORNIA", code: "06000" },
   { county: "ALAMEDA COUNTY", code: "06001" },
   { county: "ALPINE COUNTY", code: "06003" },
   { county: "AMADOR COUNTY", code: "06005" },
   { county: "BUTTE COUNTY", code: "06007" },
   { county: "CALAVERAS COUNTY", code: "06009" },
   { county: "COLUSA COUNTY", code: "06011" },
   { county: "CONTRA COSTA COUNTY", code: "06013" },
   { county: "DEL NORTE COUNTY", code: "06015" },
   { county: "EL DORADO COUNTY", code: "06017" },
   { county: "FRESNO COUNTY", code: "06019" },
   { county: "GLENN COUNTY", code: "06021" },
   { county: "HUMBOLDT COUNTY", code: "06023" },
   { county: "IMPERIAL COUNTY", code: "06025" },
   { county: "INYO COUNTY", code: "06027" },
   { county: "KERN COUNTY", code: "06029" },
   { county: "KINGS COUNTY", code: "06031" },
   { county: "LAKE COUNTY", code: "06033" },
   { county: "LASSEN COUNTY", code: "06035" },
   { county: "LOS ANGELES COUNTY", code: "06037" },
   { county: "MADERA COUNTY", code: "06039" },
   { county: "MARIN COUNTY", code: "06041" },
   { county: "MARIPOSA COUNTY", code: "06043" },
   { county: "MENDOCINO COUNTY", code: "06045" },
   { county: "MERCED COUNTY", code: "06047" },
   { county: "MODOC COUNTY", code: "06049" },
   { county: "MONO COUNTY", code: "06051" },
   { county: "MONTEREY COUNTY", code: "06053" },
   { county: "NAPA COUNTY", code: "06055" },
   { county: "NEVADA COUNTY", code: "06057" },
   { county: "ORANGE COUNTY", code: "06059" },
   { county: "PLACER COUNTY", code: "06061" },
   { county: "PLUMAS COUNTY", code: "06063" },
   { county: " RIVERSIDE COUNTY", code: "06065" },
   { county: "SACRAMENTO COUNTY", code: "06067" },
   { county: "SAN BENITO COUNTY", code: "06069" },
   { county: "SAN BERNARDINO COUNTY", code: "06071" },
   { county: "SAN DIEGO COUNTY", code: "06073" },
   { county: "SAN FRANCISCO COUNTY", code: "06075" },
   { county: "SAN JOAQUIN COUNTY", code: "06077" },
   { county: "SAN LUIS OBISPO COUNTY", code: "06079" },
   {
      county: "SAN MATEO COUNTY",
      code: "06081",
   },
   {
      county: "SANTA BARBARA COUNTY",
      code: "06083",
   },
   {
      county: "SANTA CLARA COUNTY",
      code: "06085",
   },
   {
      county: "SANTA CRUZ COUNTY",
      code: "06087",
   },
   {
      county: "SHASTA COUNTY",
      code: "06089",
   },
   {
      county: "SIERRA COUNTY",
      code: "06091",
   },
   {
      county: "SISKIYOU COUNTY",
      code: "06093",
   },
   {
      county: "SOLANO COUNTY",
      code: "06095",
   },
   {
      county: "SONOMA COUNTY",
      code: "06097",
   },
   {
      county: "STANISLAUS COUNTY",
      code: "06099",
   },
   {
      county: "SUTTER COUNTY",
      code: "06101",
   },
   {
      county: "TEHAMA COUNTY",
      code: "06103",
   },
   {
      county: "TRINITY COUNTY",
      code: "06105",
   },
   {
      county: "TULARE COUNTY",
      code: "06107",
   },
   {
      county: "TUOLUMNE COUNTY",
      code: "06109",
   },
   {
      county: "VENTURA COUNTY",
      code: "06111",
   },
   {
      county: "YOLO COUNTY",
      code: "06113",
   },
   {
      county: "YUBA COUNTY",
      code: "06115",
   },
   // {
   //    county: "COLORADO",
   //    code: "08000",
   // },
   {
      county: "ADAMS COUNTY",
      code: "08001",
   },
   {
      county: "ALAMOSA COUNTY",
      code: "08003",
   },
   {
      county: "ARAPAHOE COUNTY",
      code: "08005",
   },
   {
      county: "ARCHULETA COUNTY",
      code: "08007",
   },
   {
      county: "BACA COUNTY",
      code: "08009",
   },
   {
      county: "BENT COUNTY",
      code: "08011",
   },
   {
      county: "BOULDER COUNTY",
      code: "08013",
   },
   {
      county: "CHAFFEE COUNTY",
      code: "08015",
   },
   {
      county: "CHEYENNE COUNTY",
      code: "08017",
   },
   {
      county: "CLEAR CREEK COUNTY",
      code: "08019",
   },
   {
      county: "CONEJOS COUNTY",
      code: "08021",
   },
   {
      county: "COSTILLA COUNTY",
      code: "08023",
   },
   {
      county: "CROWLEY COUNTY",
      code: "08025",
   },
   {
      county: "CUSTER COUNTY",
      code: "08027",
   },
   {
      county: "DELTA COUNTY",
      code: "08029",
   },
   {
      county: "DENVER COUNTY",
      code: "08031",
   },
   {
      county: "DOLORES COUNTY",
      code: "08033",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "08035",
   },
   {
      county: "EAGLE COUNTY",
      code: "08037",
   },
   {
      county: "ELBERT COUNTY",
      code: "08039",
   },
   {
      county: "EL PASO COUNTY",
      code: "08041",
   },
   {
      county: "FREMONT COUNTY",
      code: "08043",
   },
   {
      county: "GARFIELD COUNTY",
      code: "08045",
   },
   {
      county: "GILPIN COUNTY",
      code: "08047",
   },
   {
      county: "GRAND COUNTY",
      code: "08049",
   },
   {
      county: "GUNNISON COUNTY",
      code: "08051",
   },
   {
      county: "HINSDALE COUNTY",
      code: "08053",
   },
   {
      county: "HUERFANO COUNTY",
      code: "08055",
   },
   {
      county: "JACKSON COUNTY",
      code: "08057",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "08059",
   },
   {
      county: "KIOWA COUNTY",
      code: "08061",
   },
   {
      county: "KIT CARSON COUNTY",
      code: "08063",
   },
   {
      county: "LAKE COUNTY",
      code: "08065",
   },
   {
      county: "LA PLATA COUNTY",
      code: "08067",
   },
   {
      county: "LARIMER COUNTY",
      code: "08069",
   },
   {
      county: "LAS ANIMAS COUNTY",
      code: "08071",
   },
   {
      county: "LINCOLN COUNTY",
      code: "08073",
   },
   {
      county: "LOGAN COUNTY",
      code: "08075",
   },
   {
      county: "MESA COUNTY",
      code: "08077",
   },
   {
      county: "MINERAL COUNTY",
      code: "08079",
   },
   {
      county: "MOFFAT COUNTY",
      code: "08081",
   },
   {
      county: "MONTEZUMA COUNTY",
      code: "08083",
   },
   {
      county: "MONTROSE COUNTY",
      code: "08085",
   },
   {
      county: "MORGAN COUNTY",
      code: "08087",
   },
   {
      county: "OTERO COUNTY",
      code: "08089",
   },
   {
      county: "OURAY COUNTY",
      code: "08091",
   },
   {
      county: "PARK COUNTY",
      code: "08093",
   },
   {
      county: "PHILLIPS COUNTY",
      code: "08095",
   },
   {
      county: "PITKIN COUNTY",
      code: "08097",
   },
   {
      county: "PROWERS COUNTY",
      code: "08099",
   },
   {
      county: "PUEBLO COUNTY",
      code: "08101",
   },
   {
      county: "RIO BLANCO COUNTY",
      code: "08103",
   },
   {
      county: "RIO GRANDE COUNTY",
      code: "08105",
   },
   {
      county: "ROUTT COUNTY",
      code: "08107",
   },
   {
      county: "SAGUACHE COUNTY",
      code: "08109",
   },
   {
      county: "SAN JUAN COUNTY",
      code: "08111",
   },
   {
      county: "SAN MIGUEL COUNTY",
      code: "08113",
   },
   {
      county: "SEDGWICK COUNTY",
      code: "08115",
   },
   {
      county: "SUMMIT COUNTY",
      code: "08117",
   },
   {
      county: "TELLER COUNTY",
      code: "08119",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "08121",
   },
   {
      county: "WELD COUNTY",
      code: "08123",
   },
   {
      county: "YUMA COUNTY",
      code: "08125",
   },
   // {
   //    county: "CONNECTICUT",
   //    code: "09000",
   // },
   {
      county: "FAIRFIELD COUNTY",
      code: "09001",
   },
   {
      county: "HARTFORD COUNTY",
      code: "09003",
   },
   {
      county: "LITCHFIELD COUNTY",
      code: "09005",
   },
   {
      county: "MIDDLESEX COUNTY",
      code: "09007",
   },
   {
      county: "NEW HAVEN COUNTY",
      code: "09009",
   },
   {
      county: "NEW LONDON COUNTY",
      code: "09011",
   },
   {
      county: "TOLLAND COUNTY",
      code: "09013",
   },
   {
      county: "WINDHAM COUNTY",
      code: "09015",
   },
   // {
   //    county: "DELAWARE",
   //    code: "10000",
   // },
   {
      county: "KENT COUNTY",
      code: "10001",
   },
   {
      county: "NEW CASTLE COUNTY",
      code: "10003",
   },
   {
      county: "SUSSEX COUNTY",
      code: "10005",
   },
   // {
   //    county: "DISTRICT OF COLUMBIA",
   //    code: "11000",
   // },
   {
      county: "DISTRICT OF COLUMBIA",
      code: "11001",
   },
   // {
   //    county: "FLORIDA",
   //    code: "12000",
   // },
   {
      county: "ALACHUA COUNTY",
      code: "12001",
   },
   {
      county: "BAKER COUNTY",
      code: "12003",
   },
   {
      county: "BAY COUNTY",
      code: "12005",
   },
   {
      county: "BRADFORD COUNTY",
      code: "12007",
   },
   {
      county: "BREVARD COUNTY",
      code: "12009",
   },
   {
      county: "BROWARD COUNTY",
      code: "12011",
   },
   {
      county: "CALHOUN COUNTY",
      code: "12013",
   },
   {
      county: "CHARLOTTE COUNTY",
      code: "12015",
   },
   {
      county: "CITRUS COUNTY",
      code: "12017",
   },
   {
      county: "CLAY COUNTY",
      code: "12019",
   },
   {
      county: "COLLIER COUNTY",
      code: "12021",
   },
   {
      county: "COLUMBIA COUNTY",
      code: "12023",
   },
   {
      county: "DADE COUNTY",
      code: "12025",
   },
   {
      county: "DESOTO COUNTY",
      code: "12027",
   },
   {
      county: "DIXIE COUNTY",
      code: "12029",
   },
   {
      county: "DUVAL COUNTY",
      code: "12031",
   },
   {
      county: "ESCAMBIA COUNTY",
      code: "12033",
   },
   {
      county: "FLAGLER COUNTY",
      code: "12035",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "12037",
   },
   {
      county: "GADSDEN COUNTY",
      code: "12039",
   },
   {
      county: "GILCHRIST COUNTY",
      code: "12041",
   },
   {
      county: "GLADES COUNTY",
      code: "12043",
   },
   {
      county: "GULF COUNTY",
      code: "12045",
   },
   {
      county: "HAMILTON COUNTY",
      code: "12047",
   },
   {
      county: "HARDEE COUNTY",
      code: "12049",
   },
   {
      county: "HENDRY COUNTY",
      code: "12051",
   },
   {
      county: "HERNANDO COUNTY",
      code: "12053",
   },
   {
      county: "HIGHLANDS COUNTY",
      code: "12055",
   },
   {
      county: "HILLSBOROUGH COUNTY",
      code: "12057",
   },
   {
      county: "HOLMES COUNTY",
      code: "12059",
   },
   {
      county: "INDIAN RIVER COUNTY",
      code: "12061",
   },
   {
      county: "JACKSON COUNTY",
      code: "12063",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "12065",
   },
   {
      county: "LAFAYETTE COUNTY",
      code: "12067",
   },
   {
      county: "LAKE COUNTY",
      code: "12069",
   },
   {
      county: "LEE COUNTY",
      code: "12071",
   },
   {
      county: "LEON COUNTY",
      code: "12073",
   },
   {
      county: "LEVY COUNTY",
      code: "12075",
   },
   {
      county: "LIBERTY COUNTY",
      code: "12077",
   },
   {
      county: "MADISON COUNTY",
      code: "12079",
   },
   {
      county: "MANATEE COUNTY",
      code: "12081",
   },
   {
      county: "MARION COUNTY",
      code: "12083",
   },
   {
      county: "MARTIN COUNTY",
      code: "12085",
   },
   {
      county: "MONROE COUNTY",
      code: "12087",
   },
   {
      county: "NASSAU COUNTY",
      code: "12089",
   },
   {
      county: "OKALOOSA COUNTY",
      code: "12091",
   },
   {
      county: "OKEECHOBEE COUNTY",
      code: "12093",
   },
   {
      county: "ORANGE COUNTY",
      code: "12095",
   },
   {
      county: "OSCEOLA COUNTY",
      code: "12097",
   },
   {
      county: "PALM BEACH COUNTY",
      code: "12099",
   },
   {
      county: "PASCO COUNTY",
      code: "12101",
   },
   {
      county: "PINELLAS COUNTY",
      code: "12103",
   },
   {
      county: "POLK COUNTY",
      code: "12105",
   },
   {
      county: "PUTNAM COUNTY",
      code: "12107",
   },
   {
      county: "ST. JOHNS COUNTY",
      code: "12109",
   },
   {
      county: "ST. LUCIE COUNTY",
      code: "12111",
   },
   {
      county: "SANTA ROSA COUNTY",
      code: "12113",
   },
   {
      county: "SARASOTA COUNTY",
      code: "12115",
   },
   {
      county: "SEMINOLE COUNTY",
      code: "12117",
   },
   {
      county: "SUMTER COUNTY",
      code: "12119",
   },
   {
      county: "SUWANNEE COUNTY",
      code: "12121",
   },
   {
      county: "TAYLOR COUNTY",
      code: "12123",
   },
   {
      county: "UNION COUNTY",
      code: "12125",
   },
   {
      county: "VOLUSIA COUNTY",
      code: "12127",
   },
   {
      county: "WAKULLA COUNTY",
      code: "12129",
   },
   {
      county: "WALTON COUNTY",
      code: "12131",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "12133",
   },
   // {
   //    county: "GEORGIA",
   //    code: "13000",
   // },
   {
      county: "APPLING COUNTY",
      code: "13001",
   },
   {
      county: "ATKINSON COUNTY",
      code: "13003",
   },
   {
      county: "BACON COUNTY",
      code: "13005",
   },
   {
      county: "BAKER COUNTY",
      code: "13007",
   },
   {
      county: "BALDWIN COUNTY",
      code: "13009",
   },
   {
      county: "BANKS COUNTY",
      code: "13011",
   },
   {
      county: "BARROW COUNTY",
      code: "13013",
   },
   {
      county: "BARTOW COUNTY",
      code: "13015",
   },
   {
      county: "BEN HILL COUNTY",
      code: "13017",
   },
   {
      county: "BERRIEN COUNTY",
      code: "13019",
   },
   {
      county: "BIBB COUNTY",
      code: "13021",
   },
   {
      county: "BLECKLEY COUNTY",
      code: "13023",
   },
   {
      county: "BRANTLEY COUNTY",
      code: "13025",
   },
   {
      county: "BROOKS COUNTY",
      code: "13027",
   },
   {
      county: "BRYAN COUNTY",
      code: "13029",
   },
   {
      county: "BULLOCH COUNTY",
      code: "13031",
   },
   {
      county: "BURKE COUNTY",
      code: "13033",
   },
   {
      county: "BUTTS COUNTY",
      code: "13035",
   },
   {
      county: "CALHOUN COUNTY",
      code: "13037",
   },
   {
      county: "CAMDEN COUNTY",
      code: "13039",
   },
   {
      county: "CANDLER COUNTY",
      code: "13043",
   },
   {
      county: "CARROLL COUNTY",
      code: "13045",
   },
   {
      county: "CATOOSA COUNTY",
      code: "13047",
   },
   {
      county: "CHARLTON COUNTY",
      code: "13049",
   },
   {
      county: "CHATHAM COUNTY",
      code: "13051",
   },
   {
      county: "CHATTAHOOCHEE COUNTY",
      code: "13053",
   },
   {
      county: "CHATTOOGA COUNTY",
      code: "13055",
   },
   {
      county: "CHEROKEE COUNTY",
      code: "13057",
   },
   {
      county: "CLARKE COUNTY",
      code: "13059",
   },
   {
      county: "CLAY COUNTY",
      code: "13061",
   },
   {
      county: "CLAYTON COUNTY",
      code: "13063",
   },
   {
      county: "CLINCH COUNTY",
      code: "13065",
   },
   {
      county: "COBB COUNTY",
      code: "13067",
   },
   {
      county: "COFFEE COUNTY",
      code: "13069",
   },
   {
      county: "COLQUITT COUNTY",
      code: "13071",
   },
   {
      county: "COLUMBIA COUNTY",
      code: "13073",
   },
   {
      county: "COOK COUNTY",
      code: "13075",
   },
   {
      county: "COWETA COUNTY",
      code: "13077",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "13079",
   },
   {
      county: "CRISP COUNTY",
      code: "13081",
   },
   {
      county: "DADE COUNTY",
      code: "13083",
   },
   {
      county: "DAWSON COUNTY",
      code: "13085",
   },
   {
      county: "DECATUR COUNTY",
      code: "13087",
   },
   {
      county: "DEKALB COUNTY",
      code: "13089",
   },
   {
      county: "DODGE COUNTY",
      code: "13091",
   },
   {
      county: "DOOLY COUNTY",
      code: "13093",
   },
   {
      county: "DOUGHERTY COUNTY",
      code: "13095",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "13097",
   },
   {
      county: "EARLY COUNTY",
      code: "13099",
   },
   {
      county: "ECHOLS COUNTY",
      code: "13101",
   },
   {
      county: "EFFINGHAM COUNTY",
      code: "13103",
   },
   {
      county: "ELBERT COUNTY",
      code: "13105",
   },
   {
      county: "EMANUEL COUNTY",
      code: "13107",
   },
   {
      county: "EVANS COUNTY",
      code: "13109",
   },
   {
      county: "FANNIN COUNTY",
      code: "13111",
   },
   {
      county: "FAYETTE COUNTY",
      code: "13113",
   },
   {
      county: "FLOYD COUNTY",
      code: "13115",
   },
   {
      county: "FORSYTH COUNTY",
      code: "13117",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "13119",
   },
   {
      county: "FULTON COUNTY",
      code: "13121",
   },
   {
      county: "GILMER COUNTY",
      code: "13123",
   },
   {
      county: "GLASCOCK COUNTY",
      code: "13125",
   },
   {
      county: "GLYNN COUNTY",
      code: "13127",
   },
   {
      county: "GORDON COUNTY",
      code: "13129",
   },
   {
      county: "GRADY COUNTY",
      code: "13131",
   },
   {
      county: "GREENE COUNTY",
      code: "13133",
   },
   {
      county: "GWINNETT COUNTY",
      code: "13135",
   },
   {
      county: "HABERSHAM COUNTY",
      code: "13137",
   },
   {
      county: "HALL COUNTY",
      code: "13139",
   },
   {
      county: "HANCOCK COUNTY",
      code: "13141",
   },
   {
      county: "HARALSON COUNTY",
      code: "13143",
   },
   {
      county: "HARRIS COUNTY",
      code: "13145",
   },
   {
      county: "HART COUNTY",
      code: "13147",
   },
   {
      county: "HEARD COUNTY",
      code: "13149",
   },
   {
      county: "HENRY COUNTY",
      code: "13151",
   },
   {
      county: "HOUSTON COUNTY",
      code: "13153",
   },
   {
      county: "IRWIN COUNTY",
      code: "13155",
   },
   {
      county: "JACKSON COUNTY",
      code: "13157",
   },
   {
      county: "JASPER COUNTY",
      code: "13159",
   },
   {
      county: "JEFF DAVIS COUNTY",
      code: "13161",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "13163",
   },
   {
      county: "JENKINS COUNTY",
      code: "13165",
   },
   {
      county: "JOHNSON COUNTY",
      code: "13167",
   },
   {
      county: "JONES COUNTY",
      code: "13169",
   },
   {
      county: "LAMAR COUNTY",
      code: "13171",
   },
   {
      county: "LANIER COUNTY",
      code: "13173",
   },
   {
      county: "LAURENS COUNTY",
      code: "13175",
   },
   {
      county: "LEE COUNTY",
      code: "13177",
   },
   {
      county: "LIBERTY COUNTY",
      code: "13179",
   },
   {
      county: "LINCOLN COUNTY",
      code: "13181",
   },
   {
      county: "LONG COUNTY",
      code: "13183",
   },
   {
      county: "LOWNDES COUNTY",
      code: "13185",
   },
   {
      county: "LUMPKIN COUNTY",
      code: "13187",
   },
   {
      county: "MCDUFFIE COUNTY",
      code: "13189",
   },
   {
      county: "MCINTOSH COUNTY",
      code: "13191",
   },
   {
      county: "MACON COUNTY",
      code: "13193",
   },
   {
      county: "MADISON COUNTY",
      code: "13195",
   },
   {
      county: "MARION COUNTY",
      code: "13197",
   },
   {
      county: "MERIWETHER COUNTY",
      code: "13199",
   },
   {
      county: "MILLER COUNTY",
      code: "13201",
   },
   {
      county: "MITCHELL COUNTY",
      code: "13205",
   },
   {
      county: "MONROE COUNTY",
      code: "13207",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "13209",
   },
   {
      county: "MORGAN COUNTY",
      code: "13211",
   },
   {
      county: "MURRAY COUNTY",
      code: "13213",
   },
   {
      county: "MUSCOGEE COUNTY",
      code: "13215",
   },
   {
      county: "NEWTON COUNTY",
      code: "13217",
   },
   {
      county: "OCONEE COUNTY",
      code: "13219",
   },
   {
      county: "OGLETHORPE COUNTY",
      code: "13221",
   },
   {
      county: "PAULDING COUNTY",
      code: "13223",
   },
   {
      county: "PEACH COUNTY",
      code: "13225",
   },
   {
      county: "PICKENS COUNTY",
      code: "13227",
   },
   {
      county: "PIERCE COUNTY",
      code: "13229",
   },
   {
      county: "PIKE COUNTY",
      code: "13231",
   },
   {
      county: "POLK COUNTY",
      code: "13233",
   },
   {
      county: "PULASKI COUNTY",
      code: "13235",
   },
   {
      county: "PUTNAM COUNTY",
      code: "13237",
   },
   {
      county: "QUITMAN COUNTY",
      code: "13239",
   },
   {
      county: "RABUN COUNTY",
      code: "13241",
   },
   {
      county: "RANDOLPH COUNTY",
      code: "13243",
   },
   {
      county: "RICHMOND COUNTY",
      code: "13245",
   },
   {
      county: "ROCKDALE COUNTY",
      code: "13247",
   },
   {
      county: "SCHLEY COUNTY",
      code: "13249",
   },
   {
      county: "SCREVEN COUNTY",
      code: "13251",
   },
   {
      county: "SEMINOLE COUNTY",
      code: "13253",
   },
   {
      county: "SPALDING COUNTY",
      code: "13255",
   },
   {
      county: "STEPHENS COUNTY",
      code: "13257",
   },
   {
      county: "STEWART COUNTY",
      code: "13259",
   },
   {
      county: "SUMTER COUNTY",
      code: "13261",
   },
   {
      county: "TALBOT COUNTY",
      code: "13263",
   },
   {
      county: "TALIAFERRO COUNTY",
      code: "13265",
   },
   {
      county: "TATTNALL COUNTY",
      code: "13267",
   },
   {
      county: "TAYLOR COUNTY",
      code: "13269",
   },
   {
      county: "TELFAIR COUNTY",
      code: "13271",
   },
   {
      county: "TERRELL COUNTY",
      code: "13273",
   },
   {
      county: "THOMAS COUNTY",
      code: "13275",
   },
   {
      county: "TIFT COUNTY",
      code: "13277",
   },
   {
      county: "TOOMBS COUNTY",
      code: "13279",
   },
   {
      county: "TOWNS COUNTY",
      code: "13281",
   },
   {
      county: "TREUTLEN COUNTY",
      code: "13283",
   },
   {
      county: "TROUP COUNTY",
      code: "13285",
   },
   {
      county: "TURNER COUNTY",
      code: "13287",
   },
   {
      county: "TWIGGS COUNTY",
      code: "13289",
   },
   {
      county: "UNION COUNTY",
      code: "13291",
   },
   {
      county: "UPSON COUNTY",
      code: "13293",
   },
   {
      county: "WALKER COUNTY",
      code: "13295",
   },
   {
      county: "WALTON COUNTY",
      code: "13297",
   },
   {
      county: "WARE COUNTY",
      code: "13299",
   },
   {
      county: "WARREN COUNTY",
      code: "13301",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "13303",
   },
   {
      county: "WAYNE COUNTY",
      code: "13305",
   },
   {
      county: "WEBSTER COUNTY",
      code: "13307",
   },
   {
      county: "WHEELER COUNTY",
      code: "13309",
   },
   {
      county: "WHITE COUNTY",
      code: "13311",
   },
   {
      county: "WHITFIELD COUNTY",
      code: "13313",
   },
   {
      county: "WILCOX COUNTY",
      code: "13315",
   },
   {
      county: "WILKES COUNTY",
      code: "13317",
   },
   {
      county: "WILKINSON COUNTY",
      code: "13319",
   },
   {
      county: "WORTH COUNTY",
      code: "13321",
   },
   // {
   //    county: "HAWAII",
   //    code: "15000",
   // },
   {
      county: "HAWAII COUNTY",
      code: "15001",
   },
   {
      county: "HONOLULU COUNTY",
      code: "15003",
   },
   {
      county: "KALAWAO COUNTY",
      code: "15005",
   },
   {
      county: "KAUAI COUNTY",
      code: "15007",
   },
   {
      county: "MAUI COUNTY",
      code: "15009",
   },
   // {
   //    county: "IDAHO",
   //    code: "16000",
   // },
   {
      county: "ADA COUNTY",
      code: "16001",
   },
   {
      county: "ADAMS COUNTY",
      code: "16003",
   },
   {
      county: "BANNOCK COUNTY",
      code: "16005",
   },
   {
      county: "BEAR LAKE COUNTY",
      code: "16007",
   },
   {
      county: "BENEWAH COUNTY",
      code: "16009",
   },
   {
      county: "BINGHAM COUNTY",
      code: "16011",
   },
   {
      county: "BLAINE COUNTY",
      code: "16013",
   },
   {
      county: "BOISE COUNTY",
      code: "16015",
   },
   {
      county: "BONNER COUNTY",
      code: "16017",
   },
   {
      county: "BONNEVILLE COUNTY",
      code: "16019",
   },
   {
      county: "BOUNDARY COUNTY",
      code: "16021",
   },
   {
      county: "BUTTE COUNTY",
      code: "16023",
   },
   {
      county: "CAMAS COUNTY",
      code: "16025",
   },
   {
      county: "CANYON COUNTY",
      code: "16027",
   },
   {
      county: "CARIBOU COUNTY",
      code: "16029",
   },
   {
      county: "CASSIA COUNTY",
      code: "16031",
   },
   {
      county: "CLARK COUNTY",
      code: "16033",
   },
   {
      county: "CLEARWATER COUNTY",
      code: "16035",
   },
   {
      county: "CUSTER COUNTY",
      code: "16037",
   },
   {
      county: "ELMORE COUNTY",
      code: "16039",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "16041",
   },
   {
      county: "FREMONT COUNTY",
      code: "16043",
   },
   {
      county: "GEM COUNTY",
      code: "16045",
   },
   {
      county: "GOODING COUNTY",
      code: "16047",
   },
   {
      county: "IDAHO COUNTY",
      code: "16049",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "16051",
   },
   {
      county: "JEROME COUNTY",
      code: "16053",
   },
   {
      county: "KOOTENAI COUNTY",
      code: "16055",
   },
   {
      county: "LATAH COUNTY",
      code: "16057",
   },
   {
      county: "LEMHI COUNTY",
      code: "16059",
   },
   {
      county: "LEWIS COUNTY",
      code: "16061",
   },
   {
      county: "LINCOLN COUNTY",
      code: "16063",
   },
   {
      county: "MADISON COUNTY",
      code: "16065",
   },
   {
      county: "MINIDOKA COUNTY",
      code: "16067",
   },
   {
      county: "NEZ PERCE COUNTY",
      code: "16069",
   },
   {
      county: "ONEIDA COUNTY",
      code: "16071",
   },
   {
      county: "OWYHEE COUNTY",
      code: "16073",
   },
   {
      county: "PAYETTE COUNTY",
      code: "16075",
   },
   {
      county: "POWER COUNTY",
      code: "16077",
   },
   {
      county: "SHOSHONE COUNTY",
      code: "16079",
   },
   {
      county: "TETON COUNTY",
      code: "16081",
   },
   {
      county: "TWIN FALLS COUNTY",
      code: "16083",
   },
   {
      county: "VALLEY COUNTY",
      code: "16085",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "16087",
   },
   // {
   //    county: "ILLINOIS",
   //    code: "17000",
   // },
   {
      county: "ADAMS COUNTY",
      code: "17001",
   },
   {
      county: "ALEXANDER COUNTY",
      code: "17003",
   },
   {
      county: "BOND COUNTY",
      code: "17005",
   },
   {
      county: "BOONE COUNTY",
      code: "17007",
   },
   {
      county: "BROWN COUNTY",
      code: "17009",
   },
   {
      county: "BUREAU COUNTY",
      code: "17011",
   },
   {
      county: "CALHOUN COUNTY",
      code: "17013",
   },
   {
      county: "CARROLL COUNTY",
      code: "17015",
   },
   {
      county: "CASS COUNTY",
      code: "17017",
   },
   {
      county: "CHAMPAIGN COUNTY",
      code: "17019",
   },
   {
      county: "CHRISTIAN COUNTY",
      code: "17021",
   },
   {
      county: "CLARK COUNTY",
      code: "17023",
   },
   {
      county: "CLAY COUNTY",
      code: "17025",
   },
   {
      county: "CLINTON COUNTY",
      code: "17027",
   },
   {
      county: "COLES COUNTY",
      code: "17029",
   },
   {
      county: "COOK COUNTY",
      code: "17031",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "17033",
   },
   {
      county: "CUMBERLAND COUNTY",
      code: "17035",
   },
   {
      county: "DEKALB COUNTY",
      code: "17037",
   },
   {
      county: "DE WITT COUNTY",
      code: "17039",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "17041",
   },
   {
      county: "DUPAGE COUNTY",
      code: "17043",
   },
   {
      county: "EDGAR COUNTY",
      code: "17045",
   },
   {
      county: "EDWARDS COUNTY",
      code: "17047",
   },
   {
      county: "EFFINGHAM COUNTY",
      code: "17049",
   },
   {
      county: "FAYETTE COUNTY",
      code: "17051",
   },
   {
      county: "FORD COUNTY",
      code: "17053",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "17055",
   },
   {
      county: "FULTON COUNTY",
      code: "17057",
   },
   {
      county: "GALLATIN COUNTY",
      code: "17059",
   },
   {
      county: "GREENE COUNTY",
      code: "17061",
   },
   {
      county: "GRUNDY COUNTY",
      code: "17063",
   },
   {
      county: "HAMILTON COUNTY",
      code: "17065",
   },
   {
      county: "HANCOCK COUNTY",
      code: "17067",
   },
   {
      county: "HARDIN COUNTY",
      code: "17069",
   },
   {
      county: "HENDERSON COUNTY",
      code: "17071",
   },
   {
      county: "HENRY COUNTY",
      code: "17073",
   },
   {
      county: "IROQUOIS COUNTY",
      code: "17075",
   },
   {
      county: "JACKSON COUNTY",
      code: "17077",
   },
   {
      county: "JASPER COUNTY",
      code: "17079",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "17081",
   },
   {
      county: "JERSEY COUNTY",
      code: "17083",
   },
   {
      county: "JO DAVIESS COUNTY",
      code: "17085",
   },
   {
      county: "JOHNSON COUNTY",
      code: "17087",
   },
   {
      county: "KANE COUNTY",
      code: "17089",
   },
   {
      county: "KANKAKEE COUNTY",
      code: "17091",
   },
   {
      county: "KENDALL COUNTY",
      code: "17093",
   },
   {
      county: "KNOX COUNTY",
      code: "17095",
   },
   {
      county: "LAKE COUNTY",
      code: "17097",
   },
   {
      county: "LA SALLE COUNTY",
      code: "17099",
   },
   {
      county: "LAWRENCE COUNTY",
      code: "17101",
   },
   {
      county: "LEE COUNTY",
      code: "17103",
   },
   {
      county: "LIVINGSTON COUNTY",
      code: "17105",
   },
   {
      county: "LOGAN COUNTY",
      code: "17107",
   },
   {
      county: "MCDONOUGH COUNTY",
      code: "17109",
   },
   {
      county: "MCHENRY COUNTY",
      code: "17111",
   },
   {
      county: "MCLEAN COUNTY",
      code: "17113",
   },
   {
      county: "MACON COUNTY",
      code: "17115",
   },
   {
      county: "MACOUPIN COUNTY",
      code: "17117",
   },
   {
      county: "MADISON COUNTY",
      code: "17119",
   },
   {
      county: "MARION COUNTY",
      code: "17121",
   },
   {
      county: "MARSHALL COUNTY",
      code: "17123",
   },
   {
      county: "MASON COUNTY",
      code: "17125",
   },
   {
      county: "MASSAC COUNTY",
      code: "17127",
   },
   {
      county: "MENARD COUNTY",
      code: "17129",
   },
   {
      county: "MERCER COUNTY",
      code: "17131",
   },
   {
      county: "MONROE COUNTY",
      code: "17133",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "17135",
   },
   {
      county: "MORGAN COUNTY",
      code: "17137",
   },
   {
      county: "MOULTRIE COUNTY",
      code: "17139",
   },
   {
      county: "OGLE COUNTY",
      code: "17141",
   },
   {
      county: "PEORIA COUNTY",
      code: "17143",
   },
   {
      county: "PERRY COUNTY",
      code: "17145",
   },
   {
      county: "PIATT COUNTY",
      code: "17147",
   },
   {
      county: "PIKE COUNTY",
      code: "17149",
   },
   {
      county: "POPE COUNTY",
      code: "17151",
   },
   {
      county: "PULASKI COUNTY",
      code: "17153",
   },
   {
      county: "PUTNAM COUNTY",
      code: "17155",
   },
   {
      county: "RANDOLPH COUNTY",
      code: "17157",
   },
   {
      county: "RICHLAND COUNTY",
      code: "17159",
   },
   {
      county: "ROCK ISLAND COUNTY",
      code: "17161",
   },
   {
      county: "ST. CLAIR COUNTY",
      code: "17163",
   },
   {
      county: "SALINE COUNTY",
      code: "17165",
   },
   {
      county: "SANGAMON COUNTY",
      code: "17167",
   },
   {
      county: "SCHUYLER COUNTY",
      code: "17169",
   },
   {
      county: "SCOTT COUNTY",
      code: "17171",
   },
   {
      county: "SHELBY COUNTY",
      code: "17173",
   },
   {
      county: "STARK COUNTY",
      code: "17175",
   },
   {
      county: "STEPHENSON COUNTY",
      code: "17177",
   },
   {
      county: "TAZEWELL COUNTY",
      code: "17179",
   },
   {
      county: "UNION COUNTY",
      code: "17181",
   },
   {
      county: "VERMILION COUNTY",
      code: "17183",
   },
   {
      county: "WABASH COUNTY",
      code: "17185",
   },
   {
      county: "WARREN COUNTY",
      code: "17187",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "17189",
   },
   {
      county: "WAYNE COUNTY",
      code: "17191",
   },
   {
      county: "WHITE COUNTY",
      code: "17193",
   },
   {
      county: "WHITESIDE COUNTY",
      code: "17195",
   },
   {
      county: "WILL COUNTY",
      code: "17197",
   },
   {
      county: "WILLIAMSON COUNTY",
      code: "17199",
   },
   {
      county: "WINNEBAGO COUNTY",
      code: "17201",
   },
   {
      county: "WOODFORD COUNTY",
      code: "17203",
   },
   // {
   //    county: "INDIANA",
   //    code: "18000",
   // },
   {
      county: "ADAMS COUNTY",
      code: "18001",
   },
   {
      county: "ALLEN COUNTY",
      code: "18003",
   },
   {
      county: "BARTHOLOMEW COUNTY",
      code: "18005",
   },
   {
      county: "BENTON COUNTY",
      code: "18007",
   },
   {
      county: "BLACKFORD COUNTY",
      code: "18009",
   },
   {
      county: "BOONE COUNTY",
      code: "18011",
   },
   {
      county: "BROWN COUNTY",
      code: "18013",
   },
   {
      county: "CARROLL COUNTY",
      code: "18015",
   },
   {
      county: "CASS COUNTY",
      code: "18017",
   },
   {
      county: "CLARK COUNTY",
      code: "18019",
   },
   {
      county: "CLAY COUNTY",
      code: "18021",
   },
   {
      county: "CLINTON COUNTY",
      code: "18023",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "18025",
   },
   {
      county: "DAVIESS COUNTY",
      code: "18027",
   },
   {
      county: "DEARBORN COUNTY",
      code: "18029",
   },
   {
      county: "DECATUR COUNTY",
      code: "18031",
   },
   {
      county: "DE KALB COUNTY",
      code: "18033",
   },
   {
      county: "DELAWARE COUNTY",
      code: "18035",
   },
   {
      county: "DUBOIS COUNTY",
      code: "18037",
   },
   {
      county: "ELKHART COUNTY",
      code: "18039",
   },
   {
      county: "FAYETTE COUNTY",
      code: "18041",
   },
   {
      county: "FLOYD COUNTY",
      code: "18043",
   },
   {
      county: "FOUNTAIN COUNTY",
      code: "18045",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "18047",
   },
   {
      county: "FULTON COUNTY",
      code: "18049",
   },
   {
      county: "GIBSON COUNTY",
      code: "18051",
   },
   {
      county: "GRANT COUNTY",
      code: "18053",
   },
   {
      county: "GREENE COUNTY",
      code: "18055",
   },
   {
      county: "HAMILTON COUNTY",
      code: "18057",
   },
   {
      county: "HANCOCK COUNTY",
      code: "18059",
   },
   {
      county: "HARRISON COUNTY",
      code: "18061",
   },
   {
      county: "HENDRICKS COUNTY",
      code: "18063",
   },
   {
      county: "HENRY COUNTY",
      code: "18065",
   },
   {
      county: "HOWARD COUNTY",
      code: "18067",
   },
   {
      county: "HUNTINGTON COUNTY",
      code: "18069",
   },
   {
      county: "JACKSON COUNTY",
      code: "18071",
   },
   {
      county: "JASPER COUNTY",
      code: "18073",
   },
   {
      county: "JAY COUNTY",
      code: "18075",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "18077",
   },
   {
      county: "JENNINGS COUNTY",
      code: "18079",
   },
   {
      county: "JOHNSON COUNTY",
      code: "18081",
   },
   {
      county: "KNOX COUNTY",
      code: "18083",
   },
   {
      county: "KOSCIUSKO COUNTY",
      code: "18085",
   },
   {
      county: "LAGRANGE COUNTY",
      code: "18087",
   },
   {
      county: "LAKE COUNTY",
      code: "18089",
   },
   {
      county: "LA PORTE COUNTY",
      code: "18091",
   },
   {
      county: "LAWRENCE COUNTY",
      code: "18093",
   },
   {
      county: "MADISON COUNTY",
      code: "18095",
   },
   {
      county: "MARION COUNTY",
      code: "18097",
   },
   {
      county: "MARSHALL COUNTY",
      code: "18099",
   },
   {
      county: "MARTIN COUNTY",
      code: "18101",
   },
   {
      county: "MIAMI COUNTY",
      code: "18103",
   },
   {
      county: "MONROE COUNTY",
      code: "18105",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "18107",
   },
   {
      county: "MORGAN COUNTY",
      code: "18109",
   },
   {
      county: "NEWTON COUNTY",
      code: "18111",
   },
   {
      county: "NOBLE COUNTY",
      code: "18113",
   },
   {
      county: "OHIO COUNTY",
      code: "18115",
   },
   {
      county: "ORANGE COUNTY",
      code: "18117",
   },
   {
      county: "OWEN COUNTY",
      code: "18119",
   },
   {
      county: "PARKE COUNTY",
      code: "18121",
   },
   {
      county: "PERRY COUNTY",
      code: "18123",
   },
   {
      county: "PIKE COUNTY",
      code: "18125",
   },
   {
      county: "PORTER COUNTY",
      code: "18127",
   },
   {
      county: "POSEY COUNTY",
      code: "18129",
   },
   {
      county: "PULASKI COUNTY",
      code: "18131",
   },
   {
      county: "PUTNAM COUNTY",
      code: "18133",
   },
   {
      county: "RANDOLPH COUNTY",
      code: "18135",
   },
   {
      county: "RIPLEY COUNTY",
      code: "18137",
   },
   {
      county: "RUSH COUNTY",
      code: "18139",
   },
   {
      county: "ST. JOSEPH COUNTY",
      code: "18141",
   },
   {
      county: "SCOTT COUNTY",
      code: "18143",
   },
   {
      county: "SHELBY COUNTY",
      code: "18145",
   },
   {
      county: "SPENCER COUNTY",
      code: "18147",
   },
   {
      county: "STARKE COUNTY",
      code: "18149",
   },
   {
      county: "STEUBEN COUNTY",
      code: "18151",
   },
   {
      county: "SULLIVAN COUNTY",
      code: "18153",
   },
   {
      county: "SWITZERLAND COUNTY",
      code: "18155",
   },
   {
      county: "TIPPECANOE COUNTY",
      code: "18157",
   },
   {
      county: "TIPTON COUNTY",
      code: "18159",
   },
   {
      county: "UNION COUNTY",
      code: "18161",
   },
   {
      county: "VANDERBURGH COUNTY",
      code: "18163",
   },
   {
      county: "VERMILLION COUNTY",
      code: "18165",
   },
   {
      county: "VIGO COUNTY",
      code: "18167",
   },
   {
      county: "WABASH COUNTY",
      code: "18169",
   },
   {
      county: "WARREN COUNTY",
      code: "18171",
   },
   {
      county: "WARRICK COUNTY",
      code: "18173",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "18175",
   },
   {
      county: "WAYNE COUNTY",
      code: "18177",
   },
   {
      county: "WELLS COUNTY",
      code: "18179",
   },
   {
      county: "WHITE COUNTY",
      code: "18181",
   },
   {
      county: "WHITLEY COUNTY",
      code: "18183",
   },
   // {
   //    county: "IOWA",
   //    code: "19000",
   // },
   {
      county: "ADAIR COUNTY",
      code: "19001",
   },
   {
      county: "ADAMS COUNTY",
      code: "19003",
   },
   {
      county: "ALLAMAKEE COUNTY",
      code: "19005",
   },
   {
      county: "APPANOOSE COUNTY",
      code: "19007",
   },
   {
      county: "AUDUBON COUNTY",
      code: "19009",
   },
   {
      county: "BENTON COUNTY",
      code: "19011",
   },
   {
      county: "BLACK HAWK COUNTY",
      code: "19013",
   },
   {
      county: "BOONE COUNTY",
      code: "19015",
   },
   {
      county: "BREMER COUNTY",
      code: "19017",
   },
   {
      county: "BUCHANAN COUNTY",
      code: "19019",
   },
   {
      county: "BUENA VISTA COUNTY",
      code: "19021",
   },
   {
      county: "BUTLER COUNTY",
      code: "19023",
   },
   {
      county: "CALHOUN COUNTY",
      code: "19025",
   },
   {
      county: "CARROLL COUNTY",
      code: "19027",
   },
   {
      county: "CASS COUNTY",
      code: "19029",
   },
   {
      county: "CEDAR COUNTY",
      code: "19031",
   },
   {
      county: "CERRO GORDO COUNTY",
      code: "19033",
   },
   {
      county: "CHEROKEE COUNTY",
      code: "19035",
   },
   {
      county: "CHICKASAW COUNTY",
      code: "19037",
   },
   {
      county: "CLARKE COUNTY",
      code: "19039",
   },
   {
      county: "CLAY COUNTY",
      code: "19041",
   },
   {
      county: "CLAYTON COUNTY",
      code: "19043",
   },
   {
      county: "CLINTON COUNTY",
      code: "19045",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "19047",
   },
   {
      county: "DALLAS COUNTY",
      code: "19049",
   },
   {
      county: "DAVIS COUNTY",
      code: "19051",
   },
   {
      county: "DECATUR COUNTY",
      code: "19053",
   },
   {
      county: "DELAWARE COUNTY",
      code: "19055",
   },
   {
      county: "DES MOINES COUNTY",
      code: "19057",
   },
   {
      county: "DICKINSON COUNTY",
      code: "19059",
   },
   {
      county: "DUBUQUE COUNTY",
      code: "19061",
   },
   {
      county: "EMMET COUNTY",
      code: "19063",
   },
   {
      county: "FAYETTE COUNTY",
      code: "19065",
   },
   {
      county: "FLOYD COUNTY",
      code: "19067",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "19069",
   },
   {
      county: "FREMONT COUNTY",
      code: "19071",
   },
   {
      county: "GREENE COUNTY",
      code: "19073",
   },
   {
      county: "GRUNDY COUNTY",
      code: "19075",
   },
   {
      county: "GUTHRIE COUNTY",
      code: "19077",
   },
   {
      county: "HAMILTON COUNTY",
      code: "19079",
   },
   {
      county: "HANCOCK COUNTY",
      code: "19081",
   },
   {
      county: "HARDIN COUNTY",
      code: "19083",
   },
   {
      county: "HARRISON COUNTY",
      code: "19085",
   },
   {
      county: "HENRY COUNTY",
      code: "19087",
   },
   {
      county: "HOWARD COUNTY",
      code: "19089",
   },
   {
      county: "HUMBOLDT COUNTY",
      code: "19091",
   },
   {
      county: "IDA COUNTY",
      code: "19093",
   },
   {
      county: "IOWA COUNTY",
      code: "19095",
   },
   {
      county: "JACKSON COUNTY",
      code: "19097",
   },
   {
      county: "JASPER COUNTY",
      code: "19099",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "19101",
   },
   {
      county: "JOHNSON COUNTY",
      code: "19103",
   },
   {
      county: "JONES COUNTY",
      code: "19105",
   },
   {
      county: "KEOKUK COUNTY",
      code: "19107",
   },
   {
      county: "KOSSUTH COUNTY",
      code: "19109",
   },
   {
      county: "LEE COUNTY",
      code: "19111",
   },
   {
      county: "LINN COUNTY",
      code: "19113",
   },
   {
      county: "LOUISA COUNTY",
      code: "19115",
   },
   {
      county: "LUCAS COUNTY",
      code: "19117",
   },
   {
      county: "LYON COUNTY",
      code: "19119",
   },
   {
      county: "MADISON COUNTY",
      code: "19121",
   },
   {
      county: "MAHASKA COUNTY",
      code: "19123",
   },
   {
      county: "MARION COUNTY",
      code: "19125",
   },
   {
      county: "MARSHALL COUNTY",
      code: "19127",
   },
   {
      county: "MILLS COUNTY",
      code: "19129",
   },
   {
      county: "MITCHELL COUNTY",
      code: "19131",
   },
   {
      county: "MONONA COUNTY",
      code: "19133",
   },
   {
      county: "MONROE COUNTY",
      code: "19135",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "19137",
   },
   {
      county: "MUSCATINE COUNTY",
      code: "19139",
   },
   {
      county: "O",
      code: "19141",
   },
   {
      county: "OSCEOLA COUNTY",
      code: "19143",
   },
   {
      county: "PAGE COUNTY",
      code: "19145",
   },
   {
      county: "PALO ALTO COUNTY",
      code: "19147",
   },
   {
      county: "PLYMOUTH COUNTY",
      code: "19149",
   },
   {
      county: "POCAHONTAS COUNTY",
      code: "19151",
   },
   {
      county: "POLK COUNTY",
      code: "19153",
   },
   {
      county: "POTTAWATTAMIE COUNTY",
      code: "19155",
   },
   {
      county: "POWESHIEK COUNTY",
      code: "19157",
   },
   {
      county: "RINGGOLD COUNTY",
      code: "19159",
   },
   {
      county: "SAC COUNTY",
      code: "19161",
   },
   {
      county: "SCOTT COUNTY",
      code: "19163",
   },
   {
      county: "SHELBY COUNTY",
      code: "19165",
   },
   {
      county: "SIOUX COUNTY",
      code: "19167",
   },
   {
      county: "STORY COUNTY",
      code: "19169",
   },
   {
      county: "TAMA COUNTY",
      code: "19171",
   },
   {
      county: "TAYLOR COUNTY",
      code: "19173",
   },
   {
      county: "UNION COUNTY",
      code: "19175",
   },
   {
      county: "VAN BUREN COUNTY",
      code: "19177",
   },
   {
      county: "WAPELLO COUNTY",
      code: "19179",
   },
   {
      county: "WARREN COUNTY",
      code: "19181",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "19183",
   },
   {
      county: "WAYNE COUNTY",
      code: "19185",
   },
   {
      county: "WEBSTER COUNTY",
      code: "19187",
   },
   {
      county: "WINNEBAGO COUNTY",
      code: "19189",
   },
   {
      county: "WINNESHIEK COUNTY",
      code: "19191",
   },
   {
      county: "WOODBURY COUNTY",
      code: "19193",
   },
   {
      county: "WORTH COUNTY",
      code: "19195",
   },
   {
      county: "WRIGHT COUNTY",
      code: "19197",
   },
   // {
   //    county: "KANSAS",
   //    code: "20000",
   // },
   {
      county: "ALLEN COUNTY",
      code: "20001",
   },
   {
      county: "ANDERSON COUNTY",
      code: "20003",
   },
   {
      county: "ATCHISON COUNTY",
      code: "20005",
   },
   {
      county: "BARBER COUNTY",
      code: "20007",
   },
   {
      county: "BARTON COUNTY",
      code: "20009",
   },
   {
      county: "BOURBON COUNTY",
      code: "20011",
   },
   {
      county: "BROWN COUNTY",
      code: "20013",
   },
   {
      county: "BUTLER COUNTY",
      code: "20015",
   },
   {
      county: "CHASE COUNTY",
      code: "20017",
   },
   {
      county: "CHAUTAUQUA COUNTY",
      code: "20019",
   },
   {
      county: "CHEROKEE COUNTY",
      code: "20021",
   },
   {
      county: "CHEYENNE COUNTY",
      code: "20023",
   },
   {
      county: "CLARK COUNTY",
      code: "20025",
   },
   {
      county: "CLAY COUNTY",
      code: "20027",
   },
   {
      county: "CLOUD COUNTY",
      code: "20029",
   },
   {
      county: "COFFEY COUNTY",
      code: "20031",
   },
   {
      county: "COMANCHE COUNTY",
      code: "20033",
   },
   {
      county: "COWLEY COUNTY",
      code: "20035",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "20037",
   },
   {
      county: "DECATUR COUNTY",
      code: "20039",
   },
   {
      county: "DICKINSON COUNTY",
      code: "20041",
   },
   {
      county: "DONIPHAN COUNTY",
      code: "20043",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "20045",
   },
   {
      county: "EDWARDS COUNTY",
      code: "20047",
   },
   {
      county: "ELK COUNTY",
      code: "20049",
   },
   {
      county: "ELLIS COUNTY",
      code: "20051",
   },
   {
      county: "ELLSWORTH COUNTY",
      code: "20053",
   },
   {
      county: "FINNEY COUNTY",
      code: "20055",
   },
   {
      county: "FORD COUNTY",
      code: "20057",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "20059",
   },
   {
      county: "GEARY COUNTY",
      code: "20061",
   },
   {
      county: "GOVE COUNTY",
      code: "20063",
   },
   {
      county: "GRAHAM COUNTY",
      code: "20065",
   },
   {
      county: "GRANT COUNTY",
      code: "20067",
   },
   {
      county: "GRAY COUNTY",
      code: "20069",
   },
   {
      county: "GREELEY COUNTY",
      code: "20071",
   },
   {
      county: "GREENWOOD COUNTY",
      code: "20073",
   },
   {
      county: "HAMILTON COUNTY",
      code: "20075",
   },
   {
      county: "HARPER COUNTY",
      code: "20077",
   },
   {
      county: "HARVEY COUNTY",
      code: "20079",
   },
   {
      county: "HASKELL COUNTY",
      code: "20081",
   },
   {
      county: "HODGEMAN COUNTY",
      code: "20083",
   },
   {
      county: "JACKSON COUNTY",
      code: "20085",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "20087",
   },
   {
      county: "JEWELL COUNTY",
      code: "20089",
   },
   {
      county: "JOHNSON COUNTY",
      code: "20091",
   },
   {
      county: "KEARNY COUNTY",
      code: "20093",
   },
   {
      county: "KINGMAN COUNTY",
      code: "20095",
   },
   {
      county: "KIOWA COUNTY",
      code: "20097",
   },
   {
      county: "LABETTE COUNTY",
      code: "20099",
   },
   {
      county: "LANE COUNTY",
      code: "20101",
   },
   {
      county: "LEAVENWORTH COUNTY",
      code: "20103",
   },
   {
      county: "LINCOLN COUNTY",
      code: "20105",
   },
   {
      county: "LINN COUNTY",
      code: "20107",
   },
   {
      county: "LOGAN COUNTY",
      code: "20109",
   },
   {
      county: "LYON COUNTY",
      code: "20111",
   },
   {
      county: "MCPHERSON COUNTY",
      code: "20113",
   },
   {
      county: "MARION COUNTY",
      code: "20115",
   },
   {
      county: "MARSHALL COUNTY",
      code: "20117",
   },
   {
      county: "MEADE COUNTY",
      code: "20119",
   },
   {
      county: "MIAMI COUNTY",
      code: "20121",
   },
   {
      county: "MITCHELL COUNTY",
      code: "20123",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "20125",
   },
   {
      county: "MORRIS COUNTY",
      code: "20127",
   },
   {
      county: "MORTON COUNTY",
      code: "20129",
   },
   {
      county: "NEMAHA COUNTY",
      code: "20131",
   },
   {
      county: "NEOSHO COUNTY",
      code: "20133",
   },
   {
      county: "NESS COUNTY",
      code: "20135",
   },
   {
      county: "NORTON COUNTY",
      code: "20137",
   },
   {
      county: "OSAGE COUNTY",
      code: "20139",
   },
   {
      county: "OSBORNE COUNTY",
      code: "20141",
   },
   {
      county: "OTTAWA COUNTY",
      code: "20143",
   },
   {
      county: "PAWNEE COUNTY",
      code: "20145",
   },
   {
      county: "PHILLIPS COUNTY",
      code: "20147",
   },
   {
      county: "POTTAWATOMIE COUNTY",
      code: "20149",
   },
   {
      county: "PRATT COUNTY",
      code: "20151",
   },
   {
      county: "RAWLINS COUNTY",
      code: "20153",
   },
   {
      county: "RENO COUNTY",
      code: "20155",
   },
   {
      county: "REPUBLIC COUNTY",
      code: "20157",
   },
   {
      county: "RICE COUNTY",
      code: "20159",
   },
   {
      county: "RILEY COUNTY",
      code: "20161",
   },
   {
      county: "ROOKS COUNTY",
      code: "20163",
   },
   {
      county: "RUSH COUNTY",
      code: "20165",
   },
   {
      county: "RUSSELL COUNTY",
      code: "20167",
   },
   {
      county: "SALINE COUNTY",
      code: "20169",
   },
   {
      county: "SCOTT COUNTY",
      code: "20171",
   },
   {
      county: "SEDGWICK COUNTY",
      code: "20173",
   },
   {
      county: "SEWARD COUNTY",
      code: "20175",
   },
   {
      county: "SHAWNEE COUNTY",
      code: "20177",
   },
   {
      county: "SHERIDAN COUNTY",
      code: "20179",
   },
   {
      county: "SHERMAN COUNTY",
      code: "20181",
   },
   {
      county: "SMITH COUNTY",
      code: "20183",
   },
   {
      county: "STAFFORD COUNTY",
      code: "20185",
   },
   {
      county: "STANTON COUNTY",
      code: "20187",
   },
   {
      county: "STEVENS COUNTY",
      code: "20189",
   },
   {
      county: "SUMNER COUNTY",
      code: "20191",
   },
   {
      county: "THOMAS COUNTY",
      code: "20193",
   },
   {
      county: "TREGO COUNTY",
      code: "20195",
   },
   {
      county: "WABAUNSEE COUNTY",
      code: "20197",
   },
   {
      county: "WALLACE COUNTY",
      code: "20199",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "20201",
   },
   {
      county: "WICHITA COUNTY",
      code: "20203",
   },
   {
      county: "WILSON COUNTY",
      code: "20205",
   },
   {
      county: "WOODSON COUNTY",
      code: "20207",
   },
   {
      county: "WYANDOTTE COUNTY",
      code: "20209",
   },
   // {
   //    county: "KENTUCKY",
   //    code: "21000",
   // },
   {
      county: "ADAIR COUNTY",
      code: "21001",
   },
   {
      county: "ALLEN COUNTY",
      code: "21003",
   },
   {
      county: "ANDERSON COUNTY",
      code: "21005",
   },
   {
      county: "BALLARD COUNTY",
      code: "21007",
   },
   {
      county: "BARREN COUNTY",
      code: "21009",
   },
   {
      county: "BATH COUNTY",
      code: "21011",
   },
   {
      county: "BELL COUNTY",
      code: "21013",
   },
   {
      county: "BOONE COUNTY",
      code: "21015",
   },
   {
      county: "BOURBON COUNTY",
      code: "21017",
   },
   {
      county: "BOYD COUNTY",
      code: "21019",
   },
   {
      county: "BOYLE COUNTY",
      code: "21021",
   },
   {
      county: "BRACKEN COUNTY",
      code: "21023",
   },
   {
      county: "BREATHITT COUNTY",
      code: "21025",
   },
   {
      county: "BRECKINRIDGE COUNTY",
      code: "21027",
   },
   {
      county: "BULLITT COUNTY",
      code: "21029",
   },
   {
      county: "BUTLER COUNTY",
      code: "21031",
   },
   {
      county: "CALDWELL COUNTY",
      code: "21033",
   },
   {
      county: "CALLOWAY COUNTY",
      code: "21035",
   },
   {
      county: "CAMPBELL COUNTY",
      code: "21037",
   },
   {
      county: "CARLISLE COUNTY",
      code: "21039",
   },
   {
      county: "CARROLL COUNTY",
      code: "21041",
   },
   {
      county: "CARTER COUNTY",
      code: "21043",
   },
   {
      county: "CASEY COUNTY",
      code: "21045",
   },
   {
      county: "CHRISTIAN COUNTY",
      code: "21047",
   },
   {
      county: "CLARK COUNTY",
      code: "21049",
   },
   {
      county: "CLAY COUNTY",
      code: "21051",
   },
   {
      county: "CLINTON COUNTY",
      code: "21053",
   },
   {
      county: "CRITTENDEN COUNTY",
      code: "21055",
   },
   {
      county: "CUMBERLAND COUNTY",
      code: "21057",
   },
   {
      county: "DAVIESS COUNTY",
      code: "21059",
   },
   {
      county: "EDMONSON COUNTY",
      code: "21061",
   },
   {
      county: "ELLIOTT COUNTY",
      code: "21063",
   },
   {
      county: "ESTILL COUNTY",
      code: "21065",
   },
   {
      county: "FAYETTE COUNTY",
      code: "21067",
   },
   {
      county: "FLEMING COUNTY",
      code: "21069",
   },
   {
      county: "FLOYD COUNTY",
      code: "21071",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "21073",
   },
   {
      county: "FULTON COUNTY",
      code: "21075",
   },
   {
      county: "GALLATIN COUNTY",
      code: "21077",
   },
   {
      county: "GARRARD COUNTY",
      code: "21079",
   },
   {
      county: "GRANT COUNTY",
      code: "21081",
   },
   {
      county: "GRAVES COUNTY",
      code: "21083",
   },
   {
      county: "GRAYSON COUNTY",
      code: "21085",
   },
   {
      county: "GREEN COUNTY",
      code: "21087",
   },
   {
      county: "GREENUP COUNTY",
      code: "21089",
   },
   {
      county: "HANCOCK COUNTY",
      code: "21091",
   },
   {
      county: "HARDIN COUNTY",
      code: "21093",
   },
   {
      county: "HARLAN COUNTY",
      code: "21095",
   },
   {
      county: "HARRISON COUNTY",
      code: "21097",
   },
   {
      county: "HART COUNTY",
      code: "21099",
   },
   {
      county: "HENDERSON COUNTY",
      code: "21101",
   },
   {
      county: "HENRY COUNTY",
      code: "21103",
   },
   {
      county: "HICKMAN COUNTY",
      code: "21105",
   },
   {
      county: "HOPKINS COUNTY",
      code: "21107",
   },
   {
      county: "JACKSON COUNTY",
      code: "21109",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "21111",
   },
   {
      county: "JESSAMINE COUNTY",
      code: "21113",
   },
   {
      county: "JOHNSON COUNTY",
      code: "21115",
   },
   {
      county: "KENTON COUNTY",
      code: "21117",
   },
   {
      county: "KNOTT COUNTY",
      code: "21119",
   },
   {
      county: "KNOX COUNTY",
      code: "21121",
   },
   {
      county: "LARUE COUNTY",
      code: "21123",
   },
   {
      county: "LAUREL COUNTY",
      code: "21125",
   },
   {
      county: "LAWRENCE COUNTY",
      code: "21127",
   },
   {
      county: "LEE COUNTY",
      code: "21129",
   },
   {
      county: "LESLIE COUNTY",
      code: "21131",
   },
   {
      county: "LETCHER COUNTY",
      code: "21133",
   },
   {
      county: "LEWIS COUNTY",
      code: "21135",
   },
   {
      county: "LINCOLN COUNTY",
      code: "21137",
   },
   {
      county: "LIVINGSTON COUNTY",
      code: "21139",
   },
   {
      county: "LOGAN COUNTY",
      code: "21141",
   },
   {
      county: "LYON COUNTY",
      code: "21143",
   },
   {
      county: "MCCRACKEN COUNTY",
      code: "21145",
   },
   {
      county: "MCCREARY COUNTY",
      code: "21147",
   },
   {
      county: "MCLEAN COUNTY",
      code: "21149",
   },
   {
      county: "MADISON COUNTY",
      code: "21151",
   },
   {
      county: "MAGOFFIN COUNTY",
      code: "21153",
   },
   {
      county: "MARION COUNTY",
      code: "21155",
   },
   {
      county: "MARSHALL COUNTY",
      code: "21157",
   },
   {
      county: "MARTIN COUNTY",
      code: "21159",
   },
   {
      county: "MASON COUNTY",
      code: "21161",
   },
   {
      county: "MEADE COUNTY",
      code: "21163",
   },
   {
      county: "MENIFEE COUNTY",
      code: "21165",
   },
   {
      county: "MERCER COUNTY",
      code: "21167",
   },
   {
      county: "METCALFE COUNTY",
      code: "21169",
   },
   {
      county: "MONROE COUNTY",
      code: "21171",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "21173",
   },
   {
      county: "MORGAN COUNTY",
      code: "21175",
   },
   {
      county: "MUHLENBERG COUNTY",
      code: "21177",
   },
   {
      county: "NELSON COUNTY",
      code: "21179",
   },
   {
      county: "NICHOLAS COUNTY",
      code: "21181",
   },
   {
      county: "OHIO COUNTY",
      code: "21183",
   },
   {
      county: "OLDHAM COUNTY",
      code: "21185",
   },
   {
      county: "OWEN COUNTY",
      code: "21187",
   },
   {
      county: "OWSLEY COUNTY",
      code: "21189",
   },
   {
      county: "PENDLETON COUNTY",
      code: "21191",
   },
   {
      county: "PERRY COUNTY",
      code: "21193",
   },
   {
      county: "PIKE COUNTY",
      code: "21195",
   },
   {
      county: "POWELL COUNTY",
      code: "21197",
   },
   {
      county: "PULASKI COUNTY",
      code: "21199",
   },
   {
      county: "ROBERTSON COUNTY",
      code: "21201",
   },
   {
      county: "ROCKCASTLE COUNTY",
      code: "21203",
   },
   {
      county: "ROWAN COUNTY",
      code: "21205",
   },
   {
      county: "RUSSELL COUNTY",
      code: "21207",
   },
   {
      county: "SCOTT COUNTY",
      code: "21209",
   },
   {
      county: "SHELBY COUNTY",
      code: "21211",
   },
   {
      county: "SIMPSON COUNTY",
      code: "21213",
   },
   {
      county: "SPENCER COUNTY",
      code: "21215",
   },
   {
      county: "TAYLOR COUNTY",
      code: "21217",
   },
   {
      county: "TODD COUNTY",
      code: "21219",
   },
   {
      county: "TRIGG COUNTY",
      code: "21221",
   },
   {
      county: "TRIMBLE COUNTY",
      code: "21223",
   },
   {
      county: "UNION COUNTY",
      code: "21225",
   },
   {
      county: "WARREN COUNTY",
      code: "21227",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "21229",
   },
   {
      county: "WAYNE COUNTY",
      code: "21231",
   },
   {
      county: "WEBSTER COUNTY",
      code: "21233",
   },
   {
      county: "WHITLEY COUNTY",
      code: "21235",
   },
   {
      county: "WOLFE COUNTY",
      code: "21237",
   },
   {
      county: "WOODFORD COUNTY",
      code: "21239",
   },
   // {
   //    county: "LOUISIANA",
   //    code: "22000",
   // },
   {
      county: "ACADIA PARISH",
      code: "22001",
   },
   {
      county: "ALLEN PARISH",
      code: "22003",
   },
   {
      county: "ASCENSION PARISH",
      code: "22005",
   },
   {
      county: "ASSUMPTION PARISH",
      code: "22007",
   },
   {
      county: "AVOYELLES PARISH",
      code: "22009",
   },
   {
      county: "BEAUREGARD PARISH",
      code: "22011",
   },
   {
      county: "BIENVILLE PARISH",
      code: "22013",
   },
   {
      county: "BOSSIER PARISH",
      code: "22015",
   },
   {
      county: "CADDO PARISH",
      code: "22017",
   },
   {
      county: "CALCASIEU PARISH",
      code: "22019",
   },
   {
      county: "CALDWELL PARISH",
      code: "22021",
   },
   {
      county: "CAMERON PARISH",
      code: "22023",
   },
   {
      county: "CATAHOULA PARISH",
      code: "22025",
   },
   {
      county: "CLAIBORNE PARISH",
      code: "22027",
   },
   {
      county: "CONCORDIA PARISH",
      code: "22029",
   },
   {
      county: "DE SOTO PARISH",
      code: "22031",
   },
   {
      county: "EAST BATON ROUGE PARISH",
      code: "22033",
   },
   {
      county: "EAST CARROLL PARISH",
      code: "22035",
   },
   {
      county: "EAST FELICIANA PARISH",
      code: "22037",
   },
   {
      county: "EVANGELINE PARISH",
      code: "22039",
   },
   {
      county: "FRANKLIN PARISH",
      code: "22041",
   },
   {
      county: "GRANT PARISH",
      code: "22043",
   },
   {
      county: "IBERIA PARISH",
      code: "22045",
   },
   {
      county: "IBERVILLE PARISH",
      code: "22047",
   },
   {
      county: "JACKSON PARISH",
      code: "22049",
   },
   {
      county: "JEFFERSON PARISH",
      code: "22051",
   },
   {
      county: "JEFFERSON DAVIS PARISH",
      code: "22053",
   },
   {
      county: "LAFAYETTE PARISH",
      code: "22055",
   },
   {
      county: "LAFOURCHE PARISH",
      code: "22057",
   },
   {
      county: "LA SALLE PARISH",
      code: "22059",
   },
   {
      county: "LINCOLN PARISH",
      code: "22061",
   },
   {
      county: "LIVINGSTON PARISH",
      code: "22063",
   },
   {
      county: "MADISON PARISH",
      code: "22065",
   },
   {
      county: "MOREHOUSE PARISH",
      code: "22067",
   },
   {
      county: "NATCHITOCHES PARISH",
      code: "22069",
   },
   {
      county: "ORLEANS PARISH",
      code: "22071",
   },
   {
      county: "OUACHITA PARISH",
      code: "22073",
   },
   {
      county: "PLAQUEMINES PARISH",
      code: "22075",
   },
   {
      county: "POINTE COUPEE PARISH",
      code: "22077",
   },
   {
      county: "RAPIDES PARISH",
      code: "22079",
   },
   {
      county: "RED RIVER PARISH",
      code: "22081",
   },
   {
      county: "RICHLAND PARISH",
      code: "22083",
   },
   {
      county: "SABINE PARISH",
      code: "22085",
   },
   {
      county: "ST. BERNARD PARISH",
      code: "22087",
   },
   {
      county: "ST. CHARLES PARISH",
      code: "22089",
   },
   {
      county: "ST. HELENA PARISH",
      code: "22091",
   },
   {
      county: "ST. JAMES PARISH",
      code: "22093",
   },
   {
      county: "ST. JOHN THE BAPTIST PARISH",
      code: "22095",
   },
   {
      county: "ST. LANDRY PARISH",
      code: "22097",
   },
   {
      county: "ST. MARTIN PARISH",
      code: "22099",
   },
   {
      county: "ST. MARY PARISH",
      code: "22101",
   },
   {
      county: "ST. TAMMANY PARISH",
      code: "22103",
   },
   {
      county: "TANGIPAHOA PARISH",
      code: "22105",
   },
   {
      county: "TENSAS PARISH",
      code: "22107",
   },
   {
      county: "TERREBONNE PARISH",
      code: "22109",
   },
   {
      county: "UNION PARISH",
      code: "22111",
   },
   {
      county: "VERMILION PARISH",
      code: "22113",
   },
   {
      county: "VERNON PARISH",
      code: "22115",
   },
   {
      county: "WASHINGTON PARISH",
      code: "22117",
   },
   {
      county: "WEBSTER PARISH",
      code: "22119",
   },
   {
      county: "WEST BATON ROUGE PARISH",
      code: "22121",
   },
   {
      county: "WEST CARROLL PARISH",
      code: "22123",
   },
   {
      county: "WEST FELICIANA PARISH",
      code: "22125",
   },
   {
      county: "WINN PARISH",
      code: "22127",
   },
   // {
   //    county: "MAINE",
   //    code: "23000",
   // },
   {
      county: "ANDROSCOGGIN COUNTY",
      code: "23001",
   },
   {
      county: "AROOSTOOK COUNTY",
      code: "23003",
   },
   {
      county: "CUMBERLAND COUNTY",
      code: "23005",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "23007",
   },
   {
      county: "HANCOCK COUNTY",
      code: "23009",
   },
   {
      county: "KENNEBEC COUNTY",
      code: "23011",
   },
   {
      county: "KNOX COUNTY",
      code: "23013",
   },
   {
      county: "LINCOLN COUNTY",
      code: "23015",
   },
   {
      county: "OXFORD COUNTY",
      code: "23017",
   },
   {
      county: "PENOBSCOT COUNTY",
      code: "23019",
   },
   {
      county: "PISCATAQUIS COUNTY",
      code: "23021",
   },
   {
      county: "SAGADAHOC COUNTY",
      code: "23023",
   },
   {
      county: "SOMERSET COUNTY",
      code: "23025",
   },
   {
      county: "WALDO COUNTY",
      code: "23027",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "23029",
   },
   {
      county: "YORK COUNTY",
      code: "23031",
   },
   // {
   //    county: "MARYLAND",
   //    code: "24000",
   // },
   {
      county: "ALLEGANY COUNTY",
      code: "24001",
   },
   {
      county: "ANNE ARUNDEL COUNTY",
      code: "24003",
   },
   {
      county: "BALTIMORE COUNTY",
      code: "24005",
   },
   {
      county: "CALVERT COUNTY",
      code: "24009",
   },
   {
      county: "CAROLINE COUNTY",
      code: "24011",
   },
   {
      county: "CARROLL COUNTY",
      code: "24013",
   },
   {
      county: "CECIL COUNTY",
      code: "24015",
   },
   {
      county: "CHARLES COUNTY",
      code: "24017",
   },
   {
      county: "DORCHESTER COUNTY",
      code: "24019",
   },
   {
      county: "FREDERICK COUNTY",
      code: "24021",
   },
   {
      county: "GARRETT COUNTY",
      code: "24023",
   },
   {
      county: "HARFORD COUNTY",
      code: "24025",
   },
   {
      county: "HOWARD COUNTY",
      code: "24027",
   },
   {
      county: "KENT COUNTY",
      code: "24029",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "24031",
   },
   {
      county: "PRINCE GEORGE",
      code: "24033",
   },
   {
      county: "QUEEN ANNE",
      code: "24035",
   },
   {
      county: "ST. MARY",
      code: "24037",
   },
   {
      county: "SOMERSET COUNTY",
      code: "24039",
   },
   {
      county: "TALBOT COUNTY",
      code: "24041",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "24043",
   },
   {
      county: "WICOMICO COUNTY",
      code: "24045",
   },
   {
      county: "WORCESTER COUNTY",
      code: "24047",
   },
   {
      county: "BALTIMORE CITY",
      code: "24510",
   },
   // {
   //    county: "MASSACHUSETTS",
   //    code: "25000",
   // },
   {
      county: "BARNSTABLE COUNTY",
      code: "25001",
   },
   {
      county: "BERKSHIRE COUNTY",
      code: "25003",
   },
   {
      county: "BRISTOL COUNTY",
      code: "25005",
   },
   {
      county: "DUKES COUNTY",
      code: "25007",
   },
   {
      county: "ESSEX COUNTY",
      code: "25009",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "25011",
   },
   {
      county: "HAMPDEN COUNTY",
      code: "25013",
   },
   {
      county: "HAMPSHIRE COUNTY",
      code: "25015",
   },
   {
      county: "MIDDLESEX COUNTY",
      code: "25017",
   },
   {
      county: "NANTUCKET COUNTY",
      code: "25019",
   },
   {
      county: "NORFOLK COUNTY",
      code: "25021",
   },
   {
      county: "PLYMOUTH COUNTY",
      code: "25023",
   },
   {
      county: "SUFFOLK COUNTY",
      code: "25025",
   },
   {
      county: "WORCESTER COUNTY",
      code: "25027",
   },
   // {
   //    county: "MICHIGAN",
   //    code: "26000",
   // },
   {
      county: "ALCONA COUNTY",
      code: "26001",
   },
   {
      county: "ALGER COUNTY",
      code: "26003",
   },
   {
      county: "ALLEGAN COUNTY",
      code: "26005",
   },
   {
      county: "ALPENA COUNTY",
      code: "26007",
   },
   {
      county: "ANTRIM COUNTY",
      code: "26009",
   },
   {
      county: "ARENAC COUNTY",
      code: "26011",
   },
   {
      county: "BARAGA COUNTY",
      code: "26013",
   },
   {
      county: "BARRY COUNTY",
      code: "26015",
   },
   {
      county: "BAY COUNTY",
      code: "26017",
   },
   {
      county: "BENZIE COUNTY",
      code: "26019",
   },
   {
      county: "BERRIEN COUNTY",
      code: "26021",
   },
   {
      county: "BRANCH COUNTY",
      code: "26023",
   },
   {
      county: "CALHOUN COUNTY",
      code: "26025",
   },
   {
      county: "CASS COUNTY",
      code: "26027",
   },
   {
      county: "CHARLEVOIX COUNTY",
      code: "26029",
   },
   {
      county: "CHEBOYGAN COUNTY",
      code: "26031",
   },
   {
      county: "CHIPPEWA COUNTY",
      code: "26033",
   },
   {
      county: "CLARE COUNTY",
      code: "26035",
   },
   {
      county: "CLINTON COUNTY",
      code: "26037",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "26039",
   },
   {
      county: "DELTA COUNTY",
      code: "26041",
   },
   {
      county: "DICKINSON COUNTY",
      code: "26043",
   },
   {
      county: "EATON COUNTY",
      code: "26045",
   },
   {
      county: "EMMET COUNTY",
      code: "26047",
   },
   {
      county: "GENESEE COUNTY",
      code: "26049",
   },
   {
      county: "GLADWIN COUNTY",
      code: "26051",
   },
   {
      county: "GOGEBIC COUNTY",
      code: "26053",
   },
   {
      county: "GRAND TRAVERSE COUNTY",
      code: "26055",
   },
   {
      county: "GRATIOT COUNTY",
      code: "26057",
   },
   {
      county: "HILLSDALE COUNTY",
      code: "26059",
   },
   {
      county: "HOUGHTON COUNTY",
      code: "26061",
   },
   {
      county: "HURON COUNTY",
      code: "26063",
   },
   {
      county: "INGHAM COUNTY",
      code: "26065",
   },
   {
      county: "IONIA COUNTY",
      code: "26067",
   },
   {
      county: "IOSCO COUNTY",
      code: "26069",
   },
   {
      county: "IRON COUNTY",
      code: "26071",
   },
   {
      county: "ISABELLA COUNTY",
      code: "26073",
   },
   {
      county: "JACKSON COUNTY",
      code: "26075",
   },
   {
      county: "KALAMAZOO COUNTY",
      code: "26077",
   },
   {
      county: "KALKASKA COUNTY",
      code: "26079",
   },
   {
      county: "KENT COUNTY",
      code: "26081",
   },
   {
      county: "KEWEENAW COUNTY",
      code: "26083",
   },
   {
      county: "LAKE COUNTY",
      code: "26085",
   },
   {
      county: "LAPEER COUNTY",
      code: "26087",
   },
   {
      county: "LEELANAU COUNTY",
      code: "26089",
   },
   {
      county: "LENAWEE COUNTY",
      code: "26091",
   },
   {
      county: "LIVINGSTON COUNTY",
      code: "26093",
   },
   {
      county: "LUCE COUNTY",
      code: "26095",
   },
   {
      county: "MACKINAC COUNTY",
      code: "26097",
   },
   {
      county: "MACOMB COUNTY",
      code: "26099",
   },
   {
      county: "MANISTEE COUNTY",
      code: "26101",
   },
   {
      county: "MARQUETTE COUNTY",
      code: "26103",
   },
   {
      county: "MASON COUNTY",
      code: "26105",
   },
   {
      county: "MECOSTA COUNTY",
      code: "26107",
   },
   {
      county: "MENOMINEE COUNTY",
      code: "26109",
   },
   {
      county: "MIDLAND COUNTY",
      code: "26111",
   },
   {
      county: "MISSAUKEE COUNTY",
      code: "26113",
   },
   {
      county: "MONROE COUNTY",
      code: "26115",
   },
   {
      county: "MONTCALM COUNTY",
      code: "26117",
   },
   {
      county: "MONTMORENCY COUNTY",
      code: "26119",
   },
   {
      county: "MUSKEGON COUNTY",
      code: "26121",
   },
   {
      county: "NEWAYGO COUNTY",
      code: "26123",
   },
   {
      county: "OAKLAND COUNTY",
      code: "26125",
   },
   {
      county: "OCEANA COUNTY",
      code: "26127",
   },
   {
      county: "OGEMAW COUNTY",
      code: "26129",
   },
   {
      county: "ONTONAGON COUNTY",
      code: "26131",
   },
   {
      county: "OSCEOLA COUNTY",
      code: "26133",
   },
   {
      county: "OSCODA COUNTY",
      code: "26135",
   },
   {
      county: "OTSEGO COUNTY",
      code: "26137",
   },
   {
      county: "OTTAWA COUNTY",
      code: "26139",
   },
   {
      county: "PRESQUE ISLE COUNTY",
      code: "26141",
   },
   {
      county: "ROSCOMMON COUNTY",
      code: "26143",
   },
   {
      county: "SAGINAW COUNTY",
      code: "26145",
   },
   {
      county: "ST. CLAIR COUNTY",
      code: "26147",
   },
   {
      county: "ST. JOSEPH COUNTY",
      code: "26149",
   },
   {
      county: "SANILAC COUNTY",
      code: "26151",
   },
   {
      county: "SCHOOLCRAFT COUNTY",
      code: "26153",
   },
   {
      county: "SHIAWASSEE COUNTY",
      code: "26155",
   },
   {
      county: "TUSCOLA COUNTY",
      code: "26157",
   },
   {
      county: "VAN BUREN COUNTY",
      code: "26159",
   },
   {
      county: "WASHTENAW COUNTY",
      code: "26161",
   },
   {
      county: "WAYNE COUNTY",
      code: "26163",
   },
   {
      county: "WEXFORD COUNTY",
      code: "26165",
   },
   // {
   //    county: "MINNESOTA",
   //    code: "27000",
   // },
   {
      county: "AITKIN COUNTY",
      code: "27001",
   },
   {
      county: "ANOKA COUNTY",
      code: "27003",
   },
   {
      county: "BECKER COUNTY",
      code: "27005",
   },
   {
      county: "BELTRAMI COUNTY",
      code: "27007",
   },
   {
      county: "BENTON COUNTY",
      code: "27009",
   },
   {
      county: "BIG STONE COUNTY",
      code: "27011",
   },
   {
      county: "BLUE EARTH COUNTY",
      code: "27013",
   },
   {
      county: "BROWN COUNTY",
      code: "27015",
   },
   {
      county: "CARLTON COUNTY",
      code: "27017",
   },
   {
      county: "CARVER COUNTY",
      code: "27019",
   },
   {
      county: "CASS COUNTY",
      code: "27021",
   },
   {
      county: "CHIPPEWA COUNTY",
      code: "27023",
   },
   {
      county: "CHISAGO COUNTY",
      code: "27025",
   },
   {
      county: "CLAY COUNTY",
      code: "27027",
   },
   {
      county: "CLEARWATER COUNTY",
      code: "27029",
   },
   {
      county: "COOK COUNTY",
      code: "27031",
   },
   {
      county: "COTTONWOOD COUNTY",
      code: "27033",
   },
   {
      county: "CROW WING COUNTY",
      code: "27035",
   },
   {
      county: "DAKOTA COUNTY",
      code: "27037",
   },
   {
      county: "DODGE COUNTY",
      code: "27039",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "27041",
   },
   {
      county: "FARIBAULT COUNTY",
      code: "27043",
   },
   {
      county: "FILLMORE COUNTY",
      code: "27045",
   },
   {
      county: "FREEBORN COUNTY",
      code: "27047",
   },
   {
      county: "GOODHUE COUNTY",
      code: "27049",
   },
   {
      county: "GRANT COUNTY",
      code: "27051",
   },
   {
      county: "HENNEPIN COUNTY",
      code: "27053",
   },
   {
      county: "HOUSTON COUNTY",
      code: "27055",
   },
   {
      county: "HUBBARD COUNTY",
      code: "27057",
   },
   {
      county: "ISANTI COUNTY",
      code: "27059",
   },
   {
      county: "ITASCA COUNTY",
      code: "27061",
   },
   {
      county: "JACKSON COUNTY",
      code: "27063",
   },
   {
      county: "KANABEC COUNTY",
      code: "27065",
   },
   {
      county: "KANDIYOHI COUNTY",
      code: "27067",
   },
   {
      county: "KITTSON COUNTY",
      code: "27069",
   },
   {
      county: "KOOCHICHING COUNTY",
      code: "27071",
   },
   {
      county: "LAC QUI PARLE COUNTY",
      code: "27073",
   },
   {
      county: "LAKE COUNTY",
      code: "27075",
   },
   {
      county: "LAKE OF THE WOODS COUNTY",
      code: "27077",
   },
   {
      county: "LE SUEUR COUNTY",
      code: "27079",
   },
   {
      county: "LINCOLN COUNTY",
      code: "27081",
   },
   {
      county: "LYON COUNTY",
      code: "27083",
   },
   {
      county: "MCLEOD COUNTY",
      code: "27085",
   },
   {
      county: "MAHNOMEN COUNTY",
      code: "27087",
   },
   {
      county: "MARSHALL COUNTY",
      code: "27089",
   },
   {
      county: "MARTIN COUNTY",
      code: "27091",
   },
   {
      county: "MEEKER COUNTY",
      code: "27093",
   },
   {
      county: "MILLE LACS COUNTY",
      code: "27095",
   },
   {
      county: "MORRISON COUNTY",
      code: "27097",
   },
   {
      county: "MOWER COUNTY",
      code: "27099",
   },
   {
      county: "MURRAY COUNTY",
      code: "27101",
   },
   {
      county: "NICOLLET COUNTY",
      code: "27103",
   },
   {
      county: "NOBLES COUNTY",
      code: "27105",
   },
   {
      county: "NORMAN COUNTY",
      code: "27107",
   },
   {
      county: "OLMSTED COUNTY",
      code: "27109",
   },
   {
      county: "OTTER TAIL COUNTY",
      code: "27111",
   },
   {
      county: "PENNINGTON COUNTY",
      code: "27113",
   },
   {
      county: "PINE COUNTY",
      code: "27115",
   },
   {
      county: "PIPESTONE COUNTY",
      code: "27117",
   },
   {
      county: "POLK COUNTY",
      code: "27119",
   },
   {
      county: "POPE COUNTY",
      code: "27121",
   },
   {
      county: "RAMSEY COUNTY",
      code: "27123",
   },
   {
      county: "RED LAKE COUNTY",
      code: "27125",
   },
   {
      county: "REDWOOD COUNTY",
      code: "27127",
   },
   {
      county: "RENVILLE COUNTY",
      code: "27129",
   },
   {
      county: "RICE COUNTY",
      code: "27131",
   },
   {
      county: "ROCK COUNTY",
      code: "27133",
   },
   {
      county: "ROSEAU COUNTY",
      code: "27135",
   },
   {
      county: "ST. LOUIS COUNTY",
      code: "27137",
   },
   {
      county: "SCOTT COUNTY",
      code: "27139",
   },
   {
      county: "SHERBURNE COUNTY",
      code: "27141",
   },
   {
      county: "SIBLEY COUNTY",
      code: "27143",
   },
   {
      county: "STEARNS COUNTY",
      code: "27145",
   },
   {
      county: "STEELE COUNTY",
      code: "27147",
   },
   {
      county: "STEVENS COUNTY",
      code: "27149",
   },
   {
      county: "SWIFT COUNTY",
      code: "27151",
   },
   {
      county: "TODD COUNTY",
      code: "27153",
   },
   {
      county: "TRAVERSE COUNTY",
      code: "27155",
   },
   {
      county: "WABASHA COUNTY",
      code: "27157",
   },
   {
      county: "WADENA COUNTY",
      code: "27159",
   },
   {
      county: "WASECA COUNTY",
      code: "27161",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "27163",
   },
   {
      county: "WATONWAN COUNTY",
      code: "27165",
   },
   {
      county: "WILKIN COUNTY",
      code: "27167",
   },
   {
      county: "WINONA COUNTY",
      code: "27169",
   },
   {
      county: "WRIGHT COUNTY",
      code: "27171",
   },
   {
      county: "YELLOW MEDICINE COUNTY",
      code: "27173",
   },
   // {
   //    county: "MISSISSIPPI",
   //    code: "28000",
   // },
   {
      county: "ADAMS COUNTY",
      code: "28001",
   },
   {
      county: "ALCORN COUNTY",
      code: "28003",
   },
   {
      county: "AMITE COUNTY",
      code: "28005",
   },
   {
      county: "ATTALA COUNTY",
      code: "28007",
   },
   {
      county: "BENTON COUNTY",
      code: "28009",
   },
   {
      county: "BOLIVAR COUNTY",
      code: "28011",
   },
   {
      county: "CALHOUN COUNTY",
      code: "28013",
   },
   {
      county: "CARROLL COUNTY",
      code: "28015",
   },
   {
      county: "CHICKASAW COUNTY",
      code: "28017",
   },
   {
      county: "CHOCTAW COUNTY",
      code: "28019",
   },
   {
      county: "CLAIBORNE COUNTY",
      code: "28021",
   },
   {
      county: "CLARKE COUNTY",
      code: "28023",
   },
   {
      county: "CLAY COUNTY",
      code: "28025",
   },
   {
      county: "COAHOMA COUNTY",
      code: "28027",
   },
   {
      county: "COPIAH COUNTY",
      code: "28029",
   },
   {
      county: "COVINGTON COUNTY",
      code: "28031",
   },
   {
      county: "DESOTO COUNTY",
      code: "28033",
   },
   {
      county: "FORREST COUNTY",
      code: "28035",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "28037",
   },
   {
      county: "GEORGE COUNTY",
      code: "28039",
   },
   {
      county: "GREENE COUNTY",
      code: "28041",
   },
   {
      county: "GRENADA COUNTY",
      code: "28043",
   },
   {
      county: "HANCOCK COUNTY",
      code: "28045",
   },
   {
      county: "HARRISON COUNTY",
      code: "28047",
   },
   {
      county: "HINDS COUNTY",
      code: "28049",
   },
   {
      county: "HOLMES COUNTY",
      code: "28051",
   },
   {
      county: "HUMPHREYS COUNTY",
      code: "28053",
   },
   {
      county: "ISSAQUENA COUNTY",
      code: "28055",
   },
   {
      county: "ITAWAMBA COUNTY",
      code: "28057",
   },
   {
      county: "JACKSON COUNTY",
      code: "28059",
   },
   {
      county: "JASPER COUNTY",
      code: "28061",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "28063",
   },
   {
      county: "JEFFERSON DAVIS COUNTY",
      code: "28065",
   },
   {
      county: "JONES COUNTY",
      code: "28067",
   },
   {
      county: "KEMPER COUNTY",
      code: "28069",
   },
   {
      county: "LAFAYETTE COUNTY",
      code: "28071",
   },
   {
      county: "LAMAR COUNTY",
      code: "28073",
   },
   {
      county: "LAUDERDALE COUNTY",
      code: "28075",
   },
   {
      county: "LAWRENCE COUNTY",
      code: "28077",
   },
   {
      county: "LEAKE COUNTY",
      code: "28079",
   },
   {
      county: "LEE COUNTY",
      code: "28081",
   },
   {
      county: "LEFLORE COUNTY",
      code: "28083",
   },
   {
      county: "LINCOLN COUNTY",
      code: "28085",
   },
   {
      county: "LOWNDES COUNTY",
      code: "28087",
   },
   {
      county: "MADISON COUNTY",
      code: "28089",
   },
   {
      county: "MARION COUNTY",
      code: "28091",
   },
   {
      county: "MARSHALL COUNTY",
      code: "28093",
   },
   {
      county: "MONROE COUNTY",
      code: "28095",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "28097",
   },
   {
      county: "NESHOBA COUNTY",
      code: "28099",
   },
   {
      county: "NEWTON COUNTY",
      code: "28101",
   },
   {
      county: "NOXUBEE COUNTY",
      code: "28103",
   },
   {
      county: "OKTIBBEHA COUNTY",
      code: "28105",
   },
   {
      county: "PANOLA COUNTY",
      code: "28107",
   },
   {
      county: "PEARL RIVER COUNTY",
      code: "28109",
   },
   {
      county: "PERRY COUNTY",
      code: "28111",
   },
   {
      county: "PIKE COUNTY",
      code: "28113",
   },
   {
      county: "PONTOTOC COUNTY",
      code: "28115",
   },
   {
      county: "PRENTISS COUNTY",
      code: "28117",
   },
   {
      county: "QUITMAN COUNTY",
      code: "28119",
   },
   {
      county: "RANKIN COUNTY",
      code: "28121",
   },
   {
      county: "SCOTT COUNTY",
      code: "28123",
   },
   {
      county: "SHARKEY COUNTY",
      code: "28125",
   },
   {
      county: "SIMPSON COUNTY",
      code: "28127",
   },
   {
      county: "SMITH COUNTY",
      code: "28129",
   },
   {
      county: "STONE COUNTY",
      code: "28131",
   },
   {
      county: "SUNFLOWER COUNTY",
      code: "28133",
   },
   {
      county: "TALLAHATCHIE COUNTY",
      code: "28135",
   },
   {
      county: "TATE COUNTY",
      code: "28137",
   },
   {
      county: "TIPPAH COUNTY",
      code: "28139",
   },
   {
      county: "TISHOMINGO COUNTY",
      code: "28141",
   },
   {
      county: "TUNICA COUNTY",
      code: "28143",
   },
   {
      county: "UNION COUNTY",
      code: "28145",
   },
   {
      county: "WALTHALL COUNTY",
      code: "28147",
   },
   {
      county: "WARREN COUNTY",
      code: "28149",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "28151",
   },
   {
      county: "WAYNE COUNTY",
      code: "28153",
   },
   {
      county: "WEBSTER COUNTY",
      code: "28155",
   },
   {
      county: "WILKINSON COUNTY",
      code: "28157",
   },
   {
      county: "WINSTON COUNTY",
      code: "28159",
   },
   {
      county: "YALOBUSHA COUNTY",
      code: "28161",
   },
   {
      county: "YAZOO COUNTY",
      code: "28163",
   },
   // {
   //    county: "MISSOURI",
   //    code: "29000",
   // },
   {
      county: "ADAIR COUNTY",
      code: "29001",
   },
   {
      county: "ANDREW COUNTY",
      code: "29003",
   },
   {
      county: "ATCHISON COUNTY",
      code: "29005",
   },
   {
      county: "AUDRAIN COUNTY",
      code: "29007",
   },
   {
      county: "BARRY COUNTY",
      code: "29009",
   },
   {
      county: "BARTON COUNTY",
      code: "29011",
   },
   {
      county: "BATES COUNTY",
      code: "29013",
   },
   {
      county: "BENTON COUNTY",
      code: "29015",
   },
   {
      county: "BOLLINGER COUNTY",
      code: "29017",
   },
   {
      county: "BOONE COUNTY",
      code: "29019",
   },
   {
      county: "BUCHANAN COUNTY",
      code: "29021",
   },
   {
      county: "BUTLER COUNTY",
      code: "29023",
   },
   {
      county: "CALDWELL COUNTY",
      code: "29025",
   },
   {
      county: "CALLAWAY COUNTY",
      code: "29027",
   },
   {
      county: "CAMDEN COUNTY",
      code: "29029",
   },
   {
      county: "CAPE GIRARDEAU COUNTY",
      code: "29031",
   },
   {
      county: "CARROLL COUNTY",
      code: "29033",
   },
   {
      county: "CARTER COUNTY",
      code: "29035",
   },
   {
      county: "CASS COUNTY",
      code: "29037",
   },
   {
      county: "CEDAR COUNTY",
      code: "29039",
   },
   {
      county: "CHARITON COUNTY",
      code: "29041",
   },
   {
      county: "CHRISTIAN COUNTY",
      code: "29043",
   },
   {
      county: "CLARK COUNTY",
      code: "29045",
   },
   {
      county: "CLAY COUNTY",
      code: "29047",
   },
   {
      county: "CLINTON COUNTY",
      code: "29049",
   },
   {
      county: "COLE COUNTY",
      code: "29051",
   },
   {
      county: "COOPER COUNTY",
      code: "29053",
   },
   {
      county: "CRAWFORD COUNTY",
      code: "29055",
   },
   {
      county: "DADE COUNTY",
      code: "29057",
   },
   {
      county: "DALLAS COUNTY",
      code: "29059",
   },
   {
      county: "DAVIESS COUNTY",
      code: "29061",
   },
   {
      county: "DEKALB COUNTY",
      code: "29063",
   },
   {
      county: "DENT COUNTY",
      code: "29065",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "29067",
   },
   {
      county: "DUNKLIN COUNTY",
      code: "29069",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "29071",
   },
   {
      county: "GASCONADE COUNTY",
      code: "29073",
   },
   {
      county: "GENTRY COUNTY",
      code: "29075",
   },
   {
      county: "GREENE COUNTY",
      code: "29077",
   },
   {
      county: "GRUNDY COUNTY",
      code: "29079",
   },
   {
      county: "HARRISON COUNTY",
      code: "29081",
   },
   {
      county: "HENRY COUNTY",
      code: "29083",
   },
   {
      county: "HICKORY COUNTY",
      code: "29085",
   },
   {
      county: "HOLT COUNTY",
      code: "29087",
   },
   {
      county: "HOWARD COUNTY",
      code: "29089",
   },
   {
      county: "HOWELL COUNTY",
      code: "29091",
   },
   {
      county: "IRON COUNTY",
      code: "29093",
   },
   {
      county: "JACKSON COUNTY",
      code: "29095",
   },
   {
      county: "JASPER COUNTY",
      code: "29097",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "29099",
   },
   {
      county: "JOHNSON COUNTY",
      code: "29101",
   },
   {
      county: "KNOX COUNTY",
      code: "29103",
   },
   {
      county: "LACLEDE COUNTY",
      code: "29105",
   },
   {
      county: "LAFAYETTE COUNTY",
      code: "29107",
   },
   {
      county: "LAWRENCE COUNTY",
      code: "29109",
   },
   {
      county: "LEWIS COUNTY",
      code: "29111",
   },
   {
      county: "LINCOLN COUNTY",
      code: "29113",
   },
   {
      county: "LINN COUNTY",
      code: "29115",
   },
   {
      county: "LIVINGSTON COUNTY",
      code: "29117",
   },
   {
      county: "MCDONALD COUNTY",
      code: "29119",
   },
   {
      county: "MACON COUNTY",
      code: "29121",
   },
   {
      county: "MADISON COUNTY",
      code: "29123",
   },
   {
      county: "MARIES COUNTY",
      code: "29125",
   },
   {
      county: "MARION COUNTY",
      code: "29127",
   },
   {
      county: "MERCER COUNTY",
      code: "29129",
   },
   {
      county: "MILLER COUNTY",
      code: "29131",
   },
   {
      county: "MISSISSIPPI COUNTY",
      code: "29133",
   },
   {
      county: "MONITEAU COUNTY",
      code: "29135",
   },
   {
      county: "MONROE COUNTY",
      code: "29137",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "29139",
   },
   {
      county: "MORGAN COUNTY",
      code: "29141",
   },
   {
      county: "NEW MADRID COUNTY",
      code: "29143",
   },
   {
      county: "NEWTON COUNTY",
      code: "29145",
   },
   {
      county: "NODAWAY COUNTY",
      code: "29147",
   },
   {
      county: "OREGON COUNTY",
      code: "29149",
   },
   {
      county: "OSAGE COUNTY",
      code: "29151",
   },
   {
      county: "OZARK COUNTY",
      code: "29153",
   },
   {
      county: "PEMISCOT COUNTY",
      code: "29155",
   },
   {
      county: "PERRY COUNTY",
      code: "29157",
   },
   {
      county: "PETTIS COUNTY",
      code: "29159",
   },
   {
      county: "PHELPS COUNTY",
      code: "29161",
   },
   {
      county: "PIKE COUNTY",
      code: "29163",
   },
   {
      county: "PLATTE COUNTY",
      code: "29165",
   },
   {
      county: "POLK COUNTY",
      code: "29167",
   },
   {
      county: "PULASKI COUNTY",
      code: "29169",
   },
   {
      county: "PUTNAM COUNTY",
      code: "29171",
   },
   {
      county: "RALLS COUNTY",
      code: "29173",
   },
   {
      county: "RANDOLPH COUNTY",
      code: "29175",
   },
   {
      county: "RAY COUNTY",
      code: "29177",
   },
   {
      county: "REYNOLDS COUNTY",
      code: "29179",
   },
   {
      county: "RIPLEY COUNTY",
      code: "29181",
   },
   {
      county: "ST. CHARLES COUNTY",
      code: "29183",
   },
   {
      county: "ST. CLAIR COUNTY",
      code: "29185",
   },
   {
      county: "STE. GENEVIEVE COUNTY",
      code: "29186",
   },
   {
      county: "ST. FRANCOIS COUNTY",
      code: "29187",
   },
   {
      county: "ST. LOUIS COUNTY",
      code: "29189",
   },
   {
      county: "SALINE COUNTY",
      code: "29195",
   },
   {
      county: "SCHUYLER COUNTY",
      code: "29197",
   },
   {
      county: "SCOTLAND COUNTY",
      code: "29199",
   },
   {
      county: "SCOTT COUNTY",
      code: "29201",
   },
   {
      county: "SHANNON COUNTY",
      code: "29203",
   },
   {
      county: "SHELBY COUNTY",
      code: "29205",
   },
   {
      county: "STODDARD COUNTY",
      code: "29207",
   },
   {
      county: "STONE COUNTY",
      code: "29209",
   },
   {
      county: "SULLIVAN COUNTY",
      code: "29211",
   },
   {
      county: "TANEY COUNTY",
      code: "29213",
   },
   {
      county: "TEXAS COUNTY",
      code: "29215",
   },
   {
      county: "VERNON COUNTY",
      code: "29217",
   },
   {
      county: "WARREN COUNTY",
      code: "29219",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "29221",
   },
   {
      county: "WAYNE COUNTY",
      code: "29223",
   },
   {
      county: "WEBSTER COUNTY",
      code: "29225",
   },
   {
      county: "WORTH COUNTY",
      code: "29227",
   },
   {
      county: "WRIGHT COUNTY",
      code: "29229",
   },
   {
      county: "ST. LOUIS CITY",
      code: "29510",
   },
   // {
   //    county: "MONTANA",
   //    code: "30000",
   // },
   {
      county: "BEAVERHEAD COUNTY",
      code: "30001",
   },
   {
      county: "BIG HORN COUNTY",
      code: "30003",
   },
   {
      county: "BLAINE COUNTY",
      code: "30005",
   },
   {
      county: "BROADWATER COUNTY",
      code: "30007",
   },
   {
      county: "CARBON COUNTY",
      code: "30009",
   },
   {
      county: "CARTER COUNTY",
      code: "30011",
   },
   {
      county: "CASCADE COUNTY",
      code: "30013",
   },
   {
      county: "CHOUTEAU COUNTY",
      code: "30015",
   },
   {
      county: "CUSTER COUNTY",
      code: "30017",
   },
   {
      county: "DANIELS COUNTY",
      code: "30019",
   },
   {
      county: "DAWSON COUNTY",
      code: "30021",
   },
   {
      county: "DEER LODGE COUNTY",
      code: "30023",
   },
   {
      county: "FALLON COUNTY",
      code: "30025",
   },
   {
      county: "FERGUS COUNTY",
      code: "30027",
   },
   {
      county: "FLATHEAD COUNTY",
      code: "30029",
   },
   {
      county: "GALLATIN COUNTY",
      code: "30031",
   },
   {
      county: "GARFIELD COUNTY",
      code: "30033",
   },
   {
      county: "GLACIER COUNTY",
      code: "30035",
   },
   {
      county: "GOLDEN VALLEY COUNTY",
      code: "30037",
   },
   {
      county: "GRANITE COUNTY",
      code: "30039",
   },
   {
      county: "HILL COUNTY",
      code: "30041",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "30043",
   },
   {
      county: "JUDITH BASIN COUNTY",
      code: "30045",
   },
   {
      county: "LAKE COUNTY",
      code: "30047",
   },
   {
      county: "LEWIS AND CLARK COUNTY",
      code: "30049",
   },
   {
      county: "LIBERTY COUNTY",
      code: "30051",
   },
   {
      county: "LINCOLN COUNTY",
      code: "30053",
   },
   {
      county: "MCCONE COUNTY",
      code: "30055",
   },
   {
      county: "MADISON COUNTY",
      code: "30057",
   },
   {
      county: "MEAGHER COUNTY",
      code: "30059",
   },
   {
      county: "MINERAL COUNTY",
      code: "30061",
   },
   {
      county: "MISSOULA COUNTY",
      code: "30063",
   },
   {
      county: "MUSSELSHELL COUNTY",
      code: "30065",
   },
   {
      county: "PARK COUNTY",
      code: "30067",
   },
   {
      county: "PETROLEUM COUNTY",
      code: "30069",
   },
   {
      county: "PHILLIPS COUNTY",
      code: "30071",
   },
   {
      county: "PONDERA COUNTY",
      code: "30073",
   },
   {
      county: "POWDER RIVER COUNTY",
      code: "30075",
   },
   {
      county: "POWELL COUNTY",
      code: "30077",
   },
   {
      county: "PRAIRIE COUNTY",
      code: "30079",
   },
   {
      county: "RAVALLI COUNTY",
      code: "30081",
   },
   {
      county: "RICHLAND COUNTY",
      code: "30083",
   },
   {
      county: "ROOSEVELT COUNTY",
      code: "30085",
   },
   {
      county: "ROSEBUD COUNTY",
      code: "30087",
   },
   {
      county: "SANDERS COUNTY",
      code: "30089",
   },
   {
      county: "SHERIDAN COUNTY",
      code: "30091",
   },
   {
      county: "SILVER BOW COUNTY",
      code: "30093",
   },
   {
      county: "STILLWATER COUNTY",
      code: "30095",
   },
   {
      county: "SWEET GRASS COUNTY",
      code: "30097",
   },
   {
      county: "TETON COUNTY",
      code: "30099",
   },
   {
      county: "TOOLE COUNTY",
      code: "30101",
   },
   {
      county: "TREASURE COUNTY",
      code: "30103",
   },
   {
      county: "VALLEY COUNTY",
      code: "30105",
   },
   {
      county: "WHEATLAND COUNTY",
      code: "30107",
   },
   {
      county: "WIBAUX COUNTY",
      code: "30109",
   },
   {
      county: "YELLOWSTONE COUNTY",
      code: "30111",
   },
   {
      county: "YELLOWSTONE NATIONAL PARK",
      code: "30113",
   },
   // {
   //    county: "NEBRASKA",
   //    code: "31000",
   // },
   {
      county: "ADAMS COUNTY",
      code: "31001",
   },
   {
      county: "ANTELOPE COUNTY",
      code: "31003",
   },
   {
      county: "ARTHUR COUNTY",
      code: "31005",
   },
   {
      county: "BANNER COUNTY",
      code: "31007",
   },
   {
      county: "BLAINE COUNTY",
      code: "31009",
   },
   {
      county: "BOONE COUNTY",
      code: "31011",
   },
   {
      county: "BOX BUTTE COUNTY",
      code: "31013",
   },
   {
      county: "BOYD COUNTY",
      code: "31015",
   },
   {
      county: "BROWN COUNTY",
      code: "31017",
   },
   {
      county: "BUFFALO COUNTY",
      code: "31019",
   },
   {
      county: "BURT COUNTY",
      code: "31021",
   },
   {
      county: "BUTLER COUNTY",
      code: "31023",
   },
   {
      county: "CASS COUNTY",
      code: "31025",
   },
   {
      county: "CEDAR COUNTY",
      code: "31027",
   },
   {
      county: "CHASE COUNTY",
      code: "31029",
   },
   {
      county: "CHERRY COUNTY",
      code: "31031",
   },
   {
      county: "CHEYENNE COUNTY",
      code: "31033",
   },
   {
      county: "CLAY COUNTY",
      code: "31035",
   },
   {
      county: "COLFAX COUNTY",
      code: "31037",
   },
   {
      county: "CUMING COUNTY",
      code: "31039",
   },
   {
      county: "CUSTER COUNTY",
      code: "31041",
   },
   {
      county: "DAKOTA COUNTY",
      code: "31043",
   },
   {
      county: "DAWES COUNTY",
      code: "31045",
   },
   {
      county: "DAWSON COUNTY",
      code: "31047",
   },
   {
      county: "DEUEL COUNTY",
      code: "31049",
   },
   {
      county: "DIXON COUNTY",
      code: "31051",
   },
   {
      county: "DODGE COUNTY",
      code: "31053",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "31055",
   },
   {
      county: "DUNDY COUNTY",
      code: "31057",
   },
   {
      county: "FILLMORE COUNTY",
      code: "31059",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "31061",
   },
   {
      county: "FRONTIER COUNTY",
      code: "31063",
   },
   {
      county: "FURNAS COUNTY",
      code: "31065",
   },
   {
      county: "GAGE COUNTY",
      code: "31067",
   },
   {
      county: "GARDEN COUNTY",
      code: "31069",
   },
   {
      county: "GARFIELD COUNTY",
      code: "31071",
   },
   {
      county: "GOSPER COUNTY",
      code: "31073",
   },
   {
      county: "GRANT COUNTY",
      code: "31075",
   },
   {
      county: "GREELEY COUNTY",
      code: "31077",
   },
   {
      county: "HALL COUNTY",
      code: "31079",
   },
   {
      county: "HAMILTON COUNTY",
      code: "31081",
   },
   {
      county: "HARLAN COUNTY",
      code: "31083",
   },
   {
      county: "HAYES COUNTY",
      code: "31085",
   },
   {
      county: "HITCHCOCK COUNTY",
      code: "31087",
   },
   {
      county: "HOLT COUNTY",
      code: "31089",
   },
   {
      county: "HOOKER COUNTY",
      code: "31091",
   },
   {
      county: "HOWARD COUNTY",
      code: "31093",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "31095",
   },
   {
      county: "JOHNSON COUNTY",
      code: "31097",
   },
   {
      county: "KEARNEY COUNTY",
      code: "31099",
   },
   {
      county: "KEITH COUNTY",
      code: "31101",
   },
   {
      county: "KEYA PAHA COUNTY",
      code: "31103",
   },
   {
      county: "KIMBALL COUNTY",
      code: "31105",
   },
   {
      county: "KNOX COUNTY",
      code: "31107",
   },
   {
      county: "LANCASTER COUNTY",
      code: "31109",
   },
   {
      county: "LINCOLN COUNTY",
      code: "31111",
   },
   {
      county: "LOGAN COUNTY",
      code: "31113",
   },
   {
      county: "LOUP COUNTY",
      code: "31115",
   },
   {
      county: "MCPHERSON COUNTY",
      code: "31117",
   },
   {
      county: "MADISON COUNTY",
      code: "31119",
   },
   {
      county: "MERRICK COUNTY",
      code: "31121",
   },
   {
      county: "MORRILL COUNTY",
      code: "31123",
   },
   {
      county: "NANCE COUNTY",
      code: "31125",
   },
   {
      county: "NEMAHA COUNTY",
      code: "31127",
   },
   {
      county: "NUCKOLLS COUNTY",
      code: "31129",
   },
   {
      county: "OTOE COUNTY",
      code: "31131",
   },
   {
      county: "PAWNEE COUNTY",
      code: "31133",
   },
   {
      county: "PERKINS COUNTY",
      code: "31135",
   },
   {
      county: "PHELPS COUNTY",
      code: "31137",
   },
   {
      county: "PIERCE COUNTY",
      code: "31139",
   },
   {
      county: "PLATTE COUNTY",
      code: "31141",
   },
   {
      county: "POLK COUNTY",
      code: "31143",
   },
   {
      county: "RED WILLOW COUNTY",
      code: "31145",
   },
   {
      county: "RICHARDSON COUNTY",
      code: "31147",
   },
   {
      county: "ROCK COUNTY",
      code: "31149",
   },
   {
      county: "SALINE COUNTY",
      code: "31151",
   },
   {
      county: "SARPY COUNTY",
      code: "31153",
   },
   {
      county: "SAUNDERS COUNTY",
      code: "31155",
   },
   {
      county: "SCOTTS BLUFF COUNTY",
      code: "31157",
   },
   {
      county: "SEWARD COUNTY",
      code: "31159",
   },
   {
      county: "SHERIDAN COUNTY",
      code: "31161",
   },
   {
      county: "SHERMAN COUNTY",
      code: "31163",
   },
   {
      county: "SIOUX COUNTY",
      code: "31165",
   },
   {
      county: "STANTON COUNTY",
      code: "31167",
   },
   {
      county: "THAYER COUNTY",
      code: "31169",
   },
   {
      county: "THOMAS COUNTY",
      code: "31171",
   },
   {
      county: "THURSTON COUNTY",
      code: "31173",
   },
   {
      county: "VALLEY COUNTY",
      code: "31175",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "31177",
   },
   {
      county: "WAYNE COUNTY",
      code: "31179",
   },
   {
      county: "WEBSTER COUNTY",
      code: "31181",
   },
   {
      county: "WHEELER COUNTY",
      code: "31183",
   },
   {
      county: "YORK COUNTY",
      code: "31185",
   },
   // {
   //    county: "NEVADA",
   //    code: "32000",
   // },
   {
      county: "CHURCHILL COUNTY",
      code: "32001",
   },
   {
      county: "CLARK COUNTY",
      code: "32003",
   },
   {
      county: "DOUGLAS COUNTY",
      code: "32005",
   },
   {
      county: "ELKO COUNTY",
      code: "32007",
   },
   {
      county: "ESMERALDA COUNTY",
      code: "32009",
   },
   {
      county: "EUREKA COUNTY",
      code: "32011",
   },
   {
      county: "HUMBOLDT COUNTY",
      code: "32013",
   },
   {
      county: "LANDER COUNTY",
      code: "32015",
   },
   {
      county: "LINCOLN COUNTY",
      code: "32017",
   },
   {
      county: "LYON COUNTY",
      code: "32019",
   },
   {
      county: "MINERAL COUNTY",
      code: "32021",
   },
   {
      county: "NYE COUNTY",
      code: "32023",
   },
   {
      county: "PERSHING COUNTY",
      code: "32027",
   },
   {
      county: "STOREY COUNTY",
      code: "32029",
   },
   {
      county: "WASHOE COUNTY",
      code: "32031",
   },
   {
      county: "WHITE PINE COUNTY",
      code: "32033",
   },
   {
      county: "CARSON CITY",
      code: "32510",
   },
   // {
   //    county: "NEW HAMPSHIRE",
   //    code: "33000",
   // },
   {
      county: "BELKNAP COUNTY",
      code: "33001",
   },
   {
      county: "CARROLL COUNTY",
      code: "33003",
   },
   {
      county: "CHESHIRE COUNTY",
      code: "33005",
   },
   {
      county: "COOS COUNTY",
      code: "33007",
   },
   {
      county: "GRAFTON COUNTY",
      code: "33009",
   },
   {
      county: "HILLSBOROUGH COUNTY",
      code: "33011",
   },
   {
      county: "MERRIMACK COUNTY",
      code: "33013",
   },
   {
      county: "ROCKINGHAM COUNTY",
      code: "33015",
   },
   {
      county: "STRAFFORD COUNTY",
      code: "33017",
   },
   {
      county: "SULLIVAN COUNTY",
      code: "33019",
   },
   // {
   //    county: "NEW JERSEY",
   //    code: "34000",
   // },
   {
      county: "ATLANTIC COUNTY",
      code: "34001",
   },
   {
      county: "BERGEN COUNTY",
      code: "34003",
   },
   {
      county: "BURLINGTON COUNTY",
      code: "34005",
   },
   {
      county: "CAMDEN COUNTY",
      code: "34007",
   },
   {
      county: "CAPE MAY COUNTY",
      code: "34009",
   },
   {
      county: "CUMBERLAND COUNTY",
      code: "34011",
   },
   {
      county: "ESSEX COUNTY",
      code: "34013",
   },
   {
      county: "GLOUCESTER COUNTY",
      code: "34015",
   },
   {
      county: "HUDSON COUNTY",
      code: "34017",
   },
   {
      county: "HUNTERDON COUNTY",
      code: "34019",
   },
   {
      county: "MERCER COUNTY",
      code: "34021",
   },
   {
      county: "MIDDLESEX COUNTY",
      code: "34023",
   },
   {
      county: "MONMOUTH COUNTY",
      code: "34025",
   },
   {
      county: "MORRIS COUNTY",
      code: "34027",
   },
   {
      county: "OCEAN COUNTY",
      code: "34029",
   },
   {
      county: "PASSAIC COUNTY",
      code: "34031",
   },
   {
      county: "SALEM COUNTY",
      code: "34033",
   },
   {
      county: "SOMERSET COUNTY",
      code: "34035",
   },
   {
      county: "SUSSEX COUNTY",
      code: "34037",
   },
   {
      county: "UNION COUNTY",
      code: "34039",
   },
   {
      county: "WARREN COUNTY",
      code: "34041",
   },
   // {
   //    county: "NEW MEXICO",
   //    code: "35000",
   // },
   {
      county: "BERNALILLO COUNTY",
      code: "35001",
   },
   {
      county: "CATRON COUNTY",
      code: "35003",
   },
   {
      county: "CHAVES COUNTY",
      code: "35005",
   },
   {
      county: "CIBOLA COUNTY",
      code: "35006",
   },
   {
      county: "COLFAX COUNTY",
      code: "35007",
   },
   {
      county: "CURRY COUNTY",
      code: "35009",
   },
   {
      county: "DEBACA COUNTY",
      code: "35011",
   },
   {
      county: "DONA ANA COUNTY",
      code: "35013",
   },
   {
      county: "EDDY COUNTY",
      code: "35015",
   },
   {
      county: "GRANT COUNTY",
      code: "35017",
   },
   {
      county: "GUADALUPE COUNTY",
      code: "35019",
   },
   {
      county: "HARDING COUNTY",
      code: "35021",
   },
   {
      county: "HIDALGO COUNTY",
      code: "35023",
   },
   {
      county: "LEA COUNTY",
      code: "35025",
   },
   {
      county: "LINCOLN COUNTY",
      code: "35027",
   },
   {
      county: "LOS ALAMOS COUNTY",
      code: "35028",
   },
   {
      county: "LUNA COUNTY",
      code: "35029",
   },
   {
      county: "MCKINLEY COUNTY",
      code: "35031",
   },
   {
      county: "MORA COUNTY",
      code: "35033",
   },
   {
      county: "OTERO COUNTY",
      code: "35035",
   },
   {
      county: "QUAY COUNTY",
      code: "35037",
   },
   {
      county: "RIO ARRIBA COUNTY",
      code: "35039",
   },
   {
      county: "ROOSEVELT COUNTY",
      code: "35041",
   },
   {
      county: "SANDOVAL COUNTY",
      code: "35043",
   },
   {
      county: "SAN JUAN COUNTY",
      code: "35045",
   },
   {
      county: "SAN MIGUEL COUNTY",
      code: "35047",
   },
   {
      county: "SANTA FE COUNTY",
      code: "35049",
   },
   {
      county: "SIERRA COUNTY",
      code: "35051",
   },
   {
      county: "SOCORRO COUNTY",
      code: "35053",
   },
   {
      county: "TAOS COUNTY",
      code: "35055",
   },
   {
      county: "TORRANCE COUNTY",
      code: "35057",
   },
   {
      county: "UNION COUNTY",
      code: "35059",
   },
   {
      county: "VALENCIA COUNTY",
      code: "35061",
   },
   // {
   //    county: "NEW YORK",
   //    code: "36000",
   // },
   {
      county: "ALBANY COUNTY",
      code: "36001",
   },
   {
      county: "ALLEGANY COUNTY",
      code: "36003",
   },
   {
      county: "BRONX COUNTY",
      code: "36005",
   },
   {
      county: "BROOME COUNTY",
      code: "36007",
   },
   {
      county: "CATTARAUGUS COUNTY",
      code: "36009",
   },
   {
      county: "CAYUGA COUNTY",
      code: "36011",
   },
   {
      county: "CHAUTAUQUA COUNTY",
      code: "36013",
   },
   {
      county: "CHEMUNG COUNTY",
      code: "36015",
   },
   {
      county: "CHENANGO COUNTY",
      code: "36017",
   },
   {
      county: "CLINTON COUNTY",
      code: "36019",
   },
   {
      county: "COLUMBIA COUNTY",
      code: "36021",
   },
   {
      county: "CORTLAND COUNTY",
      code: "36023",
   },
   {
      county: "DELAWARE COUNTY",
      code: "36025",
   },
   {
      county: "DUTCHESS COUNTY",
      code: "36027",
   },
   {
      county: "ERIE COUNTY",
      code: "36029",
   },
   {
      county: "ESSEX COUNTY",
      code: "36031",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "36033",
   },
   {
      county: "FULTON COUNTY",
      code: "36035",
   },
   {
      county: "GENESEE COUNTY",
      code: "36037",
   },
   {
      county: "GREENE COUNTY",
      code: "36039",
   },
   {
      county: "HAMILTON COUNTY",
      code: "36041",
   },
   {
      county: "HERKIMER COUNTY",
      code: "36043",
   },
   {
      county: "JEFFERSON COUNTY",
      code: "36045",
   },
   {
      county: "KINGS COUNTY",
      code: "36047",
   },
   {
      county: "LEWIS COUNTY",
      code: "36049",
   },
   {
      county: "LIVINGSTON COUNTY",
      code: "36051",
   },
   {
      county: "MADISON COUNTY",
      code: "36053",
   },
   {
      county: "MONROE COUNTY",
      code: "36055",
   },
   {
      county: "MONTGOMERY COUNTY",
      code: "36057",
   },
   {
      county: "NASSAU COUNTY",
      code: "36059",
   },
   {
      county: "NEW YORK COUNTY",
      code: "36061",
   },
   {
      county: "NIAGARA COUNTY",
      code: "36063",
   },
   {
      county: "ONEIDA COUNTY",
      code: "36065",
   },
   {
      county: "ONONDAGA COUNTY",
      code: "36067",
   },
   {
      county: "ONTARIO COUNTY",
      code: "36069",
   },
   {
      county: "ORANGE COUNTY",
      code: "36071",
   },
   {
      county: "ORLEANS COUNTY",
      code: "36073",
   },
   {
      county: "OSWEGO COUNTY",
      code: "36075",
   },
   {
      county: "OTSEGO COUNTY",
      code: "36077",
   },
   {
      county: "PUTNAM COUNTY",
      code: "36079",
   },
   {
      county: "QUEENS COUNTY",
      code: "36081",
   },
   {
      county: "RENSSELAER COUNTY",
      code: "36083",
   },
   {
      county: "RICHMOND COUNTY",
      code: "36085",
   },
   {
      county: "ROCKLAND COUNTY",
      code: "36087",
   },
   {
      county: "ST. LAWRENCE COUNTY",
      code: "36089",
   },
   {
      county: "SARATOGA COUNTY",
      code: "36091",
   },
   {
      county: "SCHENECTADY COUNTY",
      code: "36093",
   },
   {
      county: "SCHOHARIE COUNTY",
      code: "36095",
   },
   {
      county: "SCHUYLER COUNTY",
      code: "36097",
   },
   {
      county: "SENECA COUNTY",
      code: "36099",
   },
   {
      county: "STEUBEN COUNTY",
      code: "36101",
   },
   {
      county: "SUFFOLK COUNTY",
      code: "36103",
   },
   {
      county: "SULLIVAN COUNTY",
      code: "36105",
   },
   {
      county: "TIOGA COUNTY",
      code: "36107",
   },
   {
      county: "TOMPKINS COUNTY",
      code: "36109",
   },
   {
      county: "ULSTER COUNTY",
      code: "36111",
   },
   {
      county: "WARREN COUNTY",
      code: "36113",
   },
   {
      county: "WASHINGTON COUNTY",
      code: "36115",
   },
   {
      county: "WAYNE COUNTY",
      code: "36117",
   },
   {
      county: "WESTCHESTER COUNTY",
      code: "36119",
   },
   {
      county: "WYOMING COUNTY",
      code: "36121",
   },
   {
      county: "YATES COUNTY",
      code: "36123",
   },
   // {
   //    county: "NORTH CAROLINA",
   //    code: "37000",
   // },
   {
      county: "ALAMANCE COUNTY",
      code: "37001",
   },
   {
      county: "ALEXANDER COUNTY",
      code: "37003",
   },
   {
      county: "ALLEGHANY COUNTY",
      code: "37005",
   },
   {
      county: "ANSON COUNTY",
      code: "37007",
   },
   {
      county: "ASHE COUNTY",
      code: "37009",
   },
   {
      county: "AVERY COUNTY",
      code: "37011",
   },
   {
      county: "BEAUFORT COUNTY",
      code: "37013",
   },
   {
      county: "BERTIE COUNTY",
      code: "37015",
   },
   {
      county: "BLADEN COUNTY",
      code: "37017",
   },
   {
      county: "BRUNSWICK COUNTY",
      code: "37019",
   },
   {
      county: "BUNCOMBE COUNTY",
      code: "37021",
   },
   {
      county: "BURKE COUNTY",
      code: "37023",
   },
   {
      county: "CABARRUS COUNTY",
      code: "37025",
   },
   {
      county: "CALDWELL COUNTY",
      code: "37027",
   },
   {
      county: "CAMDEN COUNTY",
      code: "37029",
   },
   {
      county: "CARTERET COUNTY",
      code: "37031",
   },
   {
      county: "CASWELL COUNTY",
      code: "37033",
   },
   {
      county: "CATAWBA COUNTY",
      code: "37035",
   },
   {
      county: "CHATHAM COUNTY",
      code: "37037",
   },
   {
      county: "CHEROKEE COUNTY",
      code: "37039",
   },
   {
      county: "CHOWAN COUNTY",
      code: "37041",
   },
   {
      county: "CLAY COUNTY",
      code: "37043",
   },
   {
      county: "CLEVELAND COUNTY",
      code: "37045",
   },
   {
      county: "COLUMBUS COUNTY",
      code: "37047",
   },
   {
      county: "CRAVEN COUNTY",
      code: "37049",
   },
   {
      county: "CUMBERLAND COUNTY",
      code: "37051",
   },
   {
      county: "CURRITUCK COUNTY",
      code: "37053",
   },
   {
      county: "DARE COUNTY",
      code: "37055",
   },
   {
      county: "DAVIDSON COUNTY",
      code: "37057",
   },
   {
      county: "DAVIE COUNTY",
      code: "37059",
   },
   {
      county: "DUPLIN COUNTY",
      code: "37061",
   },
   {
      county: "DURHAM COUNTY",
      code: "37063",
   },
   {
      county: "EDGECOMBE COUNTY",
      code: "37065",
   },
   {
      county: "FORSYTH COUNTY",
      code: "37067",
   },
   {
      county: "FRANKLIN COUNTY",
      code: "37069",
   },
   {
      county: "GASTON COUNTY",
      code: "37071",
   },
   {
      county: "GATES COUNTY",
      code: "37073",
   },
   {
      county: "GRAHAM COUNTY",
      code: "37075",
   },
   {
      county: "GRANVILLE COUNTY",
      code: "37077",
   },
   {
      county: "GREENE COUNTY",
      code: "37079",
   },
   {
      county: "GUILFORD COUNTY",
      code: "37081",
   },
   {
      county: "HALIFAX COUNTY",
      code: "37083",
   },
   {
      county: "HARNETT COUNTY",
      code: "37085",
   },
   {
      county: "HAYWOOD COUNTY",
      code: "37087",
   },
   {
      county: "HENDERSON COUNTY",
      code: "37089",
   },
   {
      county: "HERTFORD COUNTY",
      code: "37091",
   },
   {
      county: "HOKE COUNTY",
      code: "37093",
   },
   {
      county: "HYDE COUNTY",
      code: "37095",
   },
   {
      county: "IREDELL COUNTY",
      code: "37097",
   },
   {
      county: "JACKSON COUNTY",
      code: "37099",
   },
   {
      county: "JOHNSTON COUNTY",
      code: "37101",
   },
   {
      county: "JONES COUNTY",
      code: "37103",
   },
   { county: "LEE COUNTY", code: "37105" },
   { county: "LENOIR COUNTY", code: "37107" },
   { county: "LINCOLN COUNTY", code: "37109" },
   { county: "MCDOWELL COUNTY", code: "37111" },
   { county: "MACON COUNTY", code: "37113" },
   { county: "MADISON COUNTY", code: "37115" },
   { county: "MARTIN COUNTY", code: "37117" },
   { county: "MECKLENBURG COUNTY", code: "37119" },
   { county: "MITCHELL COUNTY", code: "37121" },
   { county: "MONTGOMERY COUNTY", code: "37123" },
   { county: "MOORE COUNTY", code: "37125" },
   { county: "NASH COUNTY", code: "37127" },
   { county: "NEW HANOVER COUNTY", code: "37129" },
   { county: "NORT HAMPTON COUNTY", code: "37131" },
   { county: "ONSLOW COUNTY", code: "37133" },
   { county: "ORANGE COUNTY", code: "37135" },
   { county: "PAMLICO COUNTY", code: "37137" },
   { county: "PASQUOTANK COUNTY", code: "37139" },
   { county: "PENDER COUNTY", code: "37141" },
   { county: "PERQUIMANS COUNTY", code: "37143" },
   { county: "PERSON COUNTY", code: "37145" },
   { county: "PITT COUNTY", code: "37147" },
   { county: "POLK COUNTY", code: "37149" },
   { county: "RANDOLPH COUNTY", code: "37151" },
   { county: "R ICHMOND COUNTY", code: "37153" },
   { county: "ROBESON COUNTY", code: "37155" },
   { county: "ROCKINGHAM COUNTY", code: "37157" },
   { county: "ROWAN COUNTY", code: "37159" },
   { county: "RUTHERFORD COUNTY", code: "37161" },
   { county: "SAMPSON COUNTY", code: "37163" },
   { county: "SCOTLAND COUNTY", code: "37165" },
   { county: "STANLY COUNTY", code: "37167" },
   { county: "STOKES COUNTY", code: "37169" },
   { county: "SURRY COUNTY", code: "37171" },
   { county: "SWAIN COUNTY", code: "37173" },
   { county: "TRANSYLVANIA COUNTY", code: "37175" },
   { county: "TYRRELL COUNTY", code: "37177" },
   { county: "UNION COUNTY", code: "37179" },
   { county: "VANCE COUNTY", code: "37181" },
   { county: "WAKE COUNTY", code: "37183" },
   { county: "WARREN COUNTY", code: "37185" },
   { county: "WASHINGTON COUNTY", code: "37187" },
   { county: "WATAUGA COUNTY", code: "37189" },
   { county: "WAYNE COUNTY", code: "37191" },
   { county: "WILKES COUNTY", code: "37193" },
   { county: "WILSON COUNTY", code: "37195" },
   { county: "Y ADKIN COUNTY", code: "37197" },
   { county: "YANCEY COUNTY", code: "37199" },
   // { county: "NORTH DAKOTA", code: "38000" },
   { county: "ADAMS COUNTY", code: "38001" },
   { county: "BARNES COUNTY", code: "38003" },
   { county: "BENSON COUNTY", code: "38005" },
   { county: "BILLINGS COUNTY", code: "38007" },
   { county: "BOTTINEAU COUNTY", code: "38009" },
   { county: "BOWMAN COUNTY", code: "38011" },
   { county: "BURKE COUNTY", code: "38013" },
   { county: "BURLEIGH COUNTY", code: "38015" },
   { county: "CASS COUNTY", code: "38017" },
   { county: "CAVALIER COUNTY", code: "38019" },
   { county: "DICKEY COUNTY", code: "38021" },
   { county: "DIVIDE COUNTY", code: "38023" },
   { county: "DUNN COUNTY", code: "38025" },
   { county: "EDDY COUNTY", code: "38027" },
   { county: "EMMONS COUNTY", code: "38029" },
   { county: "FOSTER COUNTY", code: "38031" },
   { county: "GOLDEN VALLEY COUNTY", code: "38033" },
   { county: "GRAND FORKS COUNTY", code: "38035" },
   { county: "GRANT COUNTY", code: "38037" },
   { county: "GRIGGS COUNTY", code: "38039" },
   { county: "HETTINGER COUNTY", code: "38041" },
   { county: "KIDDER COUNTY", code: "38043" },
   { county: "LAMOURE COUNTY", code: "38045" },
   { county: "LOGAN COUNTY", code: "38047" },
   { county: "MCHENRY COUNTY", code: "38049" },
   { county: "MCINTOSH COUNTY", code: "38051" },
   { county: "MCKENZIE COUNTY", code: "38053" },
   { county: "MCLEAN COUNTY", code: "38055" },
   { county: "MERCER COUNTY", code: "38057" },
   { county: "MORTON COUNTY", code: "38059" },
   { county: "MOUNTRAIL COUNTY", code: "38061" },
   { county: "NELSON COUNTY", code: "38063" },
   { county: "OLIVER COUNTY", code: "38065" },
   { county: "PEMBINA COUNTY", code: "38067" },
   { county: "PIERCE COUNTY", code: "38069" },
   { county: "RAMSEY COUNTY", code: "38071" },
   { county: "RANSOM COUNTY", code: "38073" },
   { county: "RENVILLE COUNTY", code: " 38075" },
   { county: "RICHLAND COUNTY", code: "38077" },
   { county: "ROLETTE COUNTY", code: "38079" },
   { county: "SARGENT COUNTY", code: "38081" },
   { county: "SHERIDAN COUNTY", code: "38083" },
   { county: "SIOUX COUNTY", code: "38085" },
   { county: "SLOPE COUNTY", code: "38087" },
   { county: "STARK COUNTY", code: "38089" },
   { county: "STEELE COUNTY", code: "38091" },
   { county: "STUTSMAN COUNTY", code: "38093" },
   { county: "TOWNER COUNTY", code: "38095" },
   { county: "TRAILL COUNTY", code: "38097" },
   { county: "WALSH COUNTY", code: "38099" },
   { county: "WARD COUNTY", code: "38101" },
   { county: "WELLS COUNTY", code: "38103" },
   { county: "WILLIAMS COUNTY", code: "38105" },
   // { county: "OHIO", code: "39000" },
   { county: "ADAMS COUNTY", code: "39001" },
   { county: "ALLEN COUNTY", code: "39003" },
   { county: "ASHLAND COUNTY", code: "39005" },
   { county: "ASHTABULA COUNTY", code: "39007" },
   { county: "ATHENS COUNTY", code: "39009" },
   { county: "AUGLAIZE COUNTY", code: "39011" },
   { county: "B ELMONT COUNTY", code: "39013" },
   { county: "BROWN COUNTY", code: "39015" },
   { county: "BUTLER COUNTY", code: "39017" },
   { county: "CARROLL COUNTY", code: "39019" },
   { county: "CHAMPAIGN COUNTY", code: "39021" },
   { county: "CLARK COUNTY", code: "39023" },
   { county: "CLERMONT COUNTY", code: "39025" },
   { county: "CLINTON COUNTY", code: "39027" },
   { county: "COLUMBIANA COUNTY", code: "39029" },
   { county: "COSHOCTON COUNTY", code: "39031" },
   { county: "CRAWFORD COUNTY", code: "39033" },
   { county: "CUYAHOGA COUNTY", code: "39035" },
   { county: "DARKE COUNTY", code: "39037" },
   { county: "DEFIANCE COUNTY", code: "39039" },
   { county: "DELAWARE COUNTY", code: "39041" },
   { county: "ERIE COUNTY", code: "39043" },
   { county: "FAIRFIELD COUNTY", code: "39045" },
   { county: "FAYETTE COUNTY", code: "39047" },
   { county: "FRANKLIN COUNTY", code: "39049" },
   { county: "FULTON COUNTY", code: "39051" },
   { county: "GALLIA COUNTY", code: "39053" },
   { county: "GEAUGA COUNTY", code: "39055" },
   { county: "GREENE COUNTY", code: "39057" },
   { county: "GUERNSEY COUNTY", code: "39059" },
   { county: "HAMILTON COUNTY", code: "39061" },
   { county: "HANCOCK COUNTY", code: "39063" },
   { county: "HARDIN COUNTY", code: "39065" },
   { county: "HARRISON COUNTY", code: "39067" },
   { county: "HENRY COUNTY", code: "39069" },
   { county: "HIGHLAND COUNTY", code: "39071" },
   { county: "HOCKING COUNTY", code: "39073" },
   { county: "HOLMES COUNTY", code: "39075" },
   { county: "HURON COUNTY", code: "39077" },
   { county: "JACKSON COUNTY", code: "39079" },
   { county: "JEFFERSON COUNTY", code: "39081" },
   { county: "KNOX COUNTY", code: "39083" },
   { county: "LAKE COUNTY", code: "39085" },
   { county: "LAWRENCE COUNTY", code: "39087" },
   { county: "LICKING COUNTY", code: "39089" },
   { county: "LOGAN COUNTY", code: "39091" },
   { county: "LORAIN COUNTY", code: "39093" },
   { county: "LUCAS COUNTY", code: "39095" },
   { county: "MADISON COUNTY", code: "39097" },
   { county: "MAHONING COUNTY", code: "39099" },
   { county: "M ARION COUNTY", code: "39101" },
   { county: "MEDINA COUNTY", code: "39103" },
   { county: "MEIGS COUNTY", code: "39105" },
   { county: "MERCER COUNTY", code: "39107" },
   { county: "MIAMI COUNTY", code: "39109" },
   { county: "MONROE COUNTY", code: "39111" },
   { county: "MONTGOMERY COUNTY", code: "39113" },
   { county: "MORGAN COUNTY", code: "39115" },
   { county: "MORROW COUNTY", code: "39117" },
   { county: "MUSKINGUM COUNTY", code: "39119" },
   { county: "NOBLE COUNTY", code: "39121" },
   { county: "OTTAWA COUNTY", code: "39123" },
   { county: "PAULDING COUNTY", code: "39125" },
   { county: "PERRY COUNTY", code: "39127" },
   { county: "PICKAWAY COUNTY", code: "39129" },
   { county: "PIKE COUNTY", code: "39131" },
   { county: "PORTAGE COUNTY", code: "39133" },
   { county: "PREBLE COUNTY", code: "39135" },
   { county: "PUTNAM COUNTY", code: "39137" },
   { county: "RICHLAND COUNTY", code: "39139" },
   { county: "ROSS COUNTY", code: "39141" },
   { county: "SANDUSKY COUNTY", code: "39143" },
   { county: "SCIOTO COUNTY", code: "39145" },
   { county: "SENECA COUNTY", code: "39147" },
   { county: "SHELBY COUNTY", code: "39149" },
   { county: "STARK COUNTY", code: "39151" },
   { county: "S UMMIT COUNTY", code: "39153" },
   { county: "TRUMBULL COUNTY", code: "39155" },
   { county: "TUSCARAWAS COUNTY", code: "39157" },
   { county: "UNION COUNTY", code: "39159" },
   { county: "VAN WERT COUNTY", code: "39161" },
   { county: "VINTON COUNTY", code: "39163" },
   { county: "WARREN COUNTY", code: "39165" },
   { county: "WASHINGTON COUNTY", code: "39167" },
   { county: "WAYNE COUNTY", code: "39169" },
   { county: "WILLIAMS COUNTY", code: "39171" },
   { county: "WOOD COUNTY", code: "39173" },
   { county: " WYANDOT COUNTY", code: "39175" },
   // { county: "OKLAHOMA", code: "40000" },
   { county: "ADAIR COUNTY", code: "40001" },
   { county: "ALFALFA COUNTY", code: "40003" },
   { county: "ATOKA COUNTY", code: "40005" },
   { county: "BEAVER COUNTY", code: "40007" },
   { county: "BECKHAM COUNTY", code: "40009" },
   { county: "BLAINE COUNTY", code: "40011" },
   { county: "BRYAN COUNTY", code: "40013" },
   { county: "CADDO COUNTY", code: "40015" },
   { county: "CANADIAN COUNTY", code: "40017" },
   { county: "CARTER COUNTY ", code: "40019" },
   { county: "CHEROKEE COUNTY", code: "40021" },
   { county: "CHOCTAW COUNTY", code: "40023" },
   { county: "CIMARRON COUNTY", code: "40025" },
   { county: "CLEVELAND COUNTY", code: "40027" },
   { county: "COAL COUNTY", code: "40029" },
   { county: "COMANCHE COUNTY", code: "40031" },
   { county: "COTTON COUNTY", code: "40033" },
   { county: "CRAIG COUNTY", code: "40035" },
   { county: "CREEK COUNTY", code: "40037" },
   { county: "CUSTER COUNTY", code: "40039" },
   { county: "DELAWARE COUNTY", code: "40041" },
   { county: "DEWEY COUNTY", code: "40043" },
   { county: "ELLIS COUNTY", code: "40045" },
   { county: "GARFIELD COUNTY", code: "40047" },
   { county: "GAR VIN COUNTY", code: "40049" },
   { county: "GRADY COUNTY", code: "40051" },
   { county: "GRANT COUNTY", code: "40053" },
   { county: "GREER COUNTY", code: "40055" },
   { county: "HARMON COUNTY", code: "40057" },
   { county: "HARPER COUNTY", code: "40059" },
   { county: "HASKELL COUNTY", code: "40061" },
   { county: "HUGHES COUNTY", code: "40063" },
   { county: "JACKSON COUNTY", code: "40065" },
   { county: "JEFFERSON COUNTY", code: "40067" },
   { county: "JOHNSTON COUNTY", code: "40069" },
   { county: "KAY COUNTY", code: "40071" },
   { county: "KINGFISHER COUNTY", code: "40073" },
   { county: "KIOWA COUNTY", code: "40075" },
   { county: "LATIMER COUNTY", code: "40077" },
   { county: "LE FLORE COUNTY", code: "40079" },
   { county: "LINCOLN COUNTY", code: "40081" },
   { county: "LOGAN COUNTY", code: "40083" },
   { county: "LOVE COUNTY", code: "40085" },
   { county: "MCCLAIN COUNTY", code: "40087" },
   { county: "MCCURTAIN COUNTY", code: "40089" },
   { county: "MCINTOSH COUNTY", code: "40091" },
   { county: "MAJOR COUNTY", code: "40093" },
   { county: "MARSHALL COUNTY", code: "40095" },
   { county: "MAYES COUNTY", code: "40097" },
   { county: "MURRAY COUNTY", code: "40099" },
   { county: "MUSKOGEE COUNTY", code: "40101" },
   { county: "NOBLE COUNTY", code: "40103" },
   { county: "NOWATA COUNTY", code: "40105" },
   { county: "OKFUSKEE COUNTY", code: "40107" },
   { county: "OKLAHOMA COUNTY", code: "40109" },
   { county: "OKMULGEE COUNTY", code: "40111" },
   { county: "OSAGE COUNTY", code: "40113" },
   { county: "OTTAWA COUNTY ", code: "40115" },
   { county: "PAWNEE COUNTY", code: "40117" },
   { county: "PAYNE COUNTY", code: "40119" },
   { county: "PITTSBURG COUNTY", code: "40121" },
   { county: " PONTOTOC COUNTY", code: "40123" },
   { county: "POTTAWATOMIE COUNTY", code: "40125" },
   { county: "PUSHMATAHA COUNTY", code: "40127" },
   { county: "ROGER MILLS COUNTY", code: "40129" },
   { county: "ROGERS COUNTY", code: "40131" },
   { county: "SEMINOLE COUNTY", code: "40133" },
   { county: "SEQUOYAH COUNTY", code: "40135" },
   { county: "STEPHENS COUNTY", code: "40137" },
   { county: "TEXAS COUNTY", code: "40139" },
   { county: "TILLMAN COUNTY", code: "40141" },
   { county: "TULSA COUNTY", code: "40143" },
   { county: "WAGONER COUNTY", code: "40145" },
   { county: "WASHINGTON COUNTY", code: "40147" },
   { county: "WASHITA COUNTY", code: "40149" },
   { county: "WOODS COUNTY ", code: "40151" },
   { county: "WOODWARD COUNTY", code: "40153" },
   // { county: "OREGON", code: "41000" },
   { county: "BAKER COUNTY", code: "41001" },
   { county: "BENTON COUNTY", code: "41003" },
   { county: "CLACKAMAS COUNTY", code: "41005" },
   { county: "CLATSOP COUNTY", code: "41007" },
   { county: "COLUMBIA COUNTY", code: "41009" },
   { county: "COOS COUNTY", code: "41011" },
   { county: "CROOK COUNTY", code: "41013" },
   { county: "CURRY COUNTY", code: "41015" },
   { county: "DESCHUTES COUNTY", code: " 41017" },
   { county: "DOUGLAS COUNTY", code: "41019" },
   { county: "GILLIAM COUNTY", code: "41021" },
   { county: "GRANT COUNTY", code: "41023" },
   { county: "HARNEY COUNTY", code: "41025" },
   { county: "HOOD RIVER COUNTY", code: "41027" },
   { county: "JACKSON COUNTY", code: "41029" },
   { county: "JEFFERSON COUNTY", code: "41031" },
   { county: "JOSEPHINE COUNTY", code: "41033" },
   { county: "KLAMATH COUNTY", code: "41035" },
   { county: "LAKE COUNTY", code: "41037" },
   { county: "LANE COUNTY", code: " 41039" },
   { county: "LINCOLN COUNTY", code: "41041" },
   { county: "LINN COUNTY", code: "41043" },
   { county: "MALHEUR COUNTY", code: "41045" },
   { county: "MARION COUNTY", code: "41047" },
   { county: "MORROW COUNTY", code: "41049" },
   { county: "MULTNOMAH COUNTY", code: "41051" },
   { county: "POLK COUNTY", code: "41053" },
   { county: " SHERMAN COUNTY", code: "41055" },
   { county: "TILLAMOOK COUNTY", code: "41057" },
   { county: "UMATILLA COUNTY", code: "41059" },
   { county: "UNION COUNTY", code: "41061" },
   { county: "WALLOWA COUNTY", code: "41063" },
   { county: "WASCO COUNTY", code: "41065" },
   { county: "WASHINGTON COUNTY", code: "41067" },
   { county: "WHEELER COUNTY", code: "41069" },
   { county: "YAMHILL COUNTY", code: "41071" },
   // { county: "PENNSYLVANIA", code: "42000" },
   { county: "ADAMS COUNTY", code: "42001" },
   { county: " ALLEGHENY COUNTY", code: "42003" },
   { county: "ARMSTRONG COUNTY", code: "42005" },
   { county: "BEAVER COUNTY", code: "42007" },
   { county: "BEDFORD COUNTY", code: "42009" },
   { county: "BERKS COUNTY", code: "42011" },
   { county: "BLAIR COUNTY", code: "42013" },
   { county: "BRADFORD COUNTY", code: "42015" },
   { county: "BUCKS COUNTY", code: "42017" },
   { county: "BUTLER COUNTY", code: "42019" },
   { county: "CAMBRIA COUNTY", code: "42021" },
   { county: "CAMERON COUNTY", code: "42023" },
   { county: "CARBON COUNTY", code: "42025" },
   { county: "CENTRE COUNTY", code: "42027" },
   { county: "CHESTER COUNTY", code: "42029" },
   { county: "CLARION COUNTY", code: "42031" },
   { county: "CLEARFIELD COUNTY", code: "42033" },
   { county: "CLINTON COUNTY", code: "42035" },
   { county: "COLUMBIA COUNTY", code: "42037" },
   { county: "CRAWFORD COUNTY", code: "42039" },
   { county: "CUMBERLAND COUNTY", code: "42041" },
   { county: "DAUPHIN COUNTY", code: "42043" },
   { county: "DELAWARE COUNTY", code: "42045" },
   { county: "ELK COUNTY", code: "42047" },
   { county: "ERIE COUNTY", code: "42049" },
   { county: "FAYETTE COUNTY", code: "42051" },
   { county: "FOREST COUNTY", code: "42053" },
   { county: "FRANKLIN COUNTY", code: "42055" },
   { county: "FULTON COUNTY", code: "42057" },
   { county: "GREENE COUNTY", code: "42059" },
   { county: "HUNTINGDON COUNTY", code: "42061" },
   { county: "INDIANA COUNTY", code: "42063" },
   { county: "JEFFERSON COUNTY", code: "42065" },
   { county: "JUNIATA COUNTY", code: "42067" },
   { county: "LACKAWANNA COUNTY", code: "42069" },
   { county: "LANCASTER COUNTY", code: "42071" },
   { county: "LAWRENCE COUNTY", code: "42073" },
   { county: "LEBANON COUNTY", code: "42075" },
   { county: "LEHIGH COUNTY", code: "42077" },
   { county: "LUZERNE COUNTY", code: "42079" },
   { county: "LYCOMING COUNTY", code: "42081" },
   { county: "MC KEAN COUNTY", code: "42083" },
   { county: "MERCER COUNTY", code: "42085" },
   { county: "MIFFLIN COUNTY", code: "42087" },
   { county: "MONROE COUNTY", code: "42089" },
   { county: "MONTGOMERY COUNTY", code: "42091" },
   { county: "MONTOUR COUNTY", code: "42093" },
   { county: "NORTHAMPTON COUNTY", code: "42095" },
   { county: "NORTHUMBE RLAND COUNTY", code: "42097" },
   { county: "PERRY COUNTY", code: "42099" },
   { county: "PHILADELPHIA COUNTY", code: "42101" },
   { county: "PIKE COUNTY", code: "42103" },
   { county: "POTTER COUNTY", code: "42105" },
   { county: "SCHUYLKILL COUNTY", code: "42107" },
   { county: "SNYDER COUNTY", code: "42109" },
   { county: "SOMERSET COUNTY", code: "42111" },
   { county: "SULLIVAN COUNTY", code: "42113" },
   { county: "SUSQUEHANNA COUNTY", code: "42115" },
   { county: "TIOGA COUNTY", code: "42117" },
   { county: "UNION COUNTY", code: "42119" },
   { county: "VENANGO COUNTY", code: "42121" },
   { county: "WARREN COUNTY", code: "42123" },
   { county: "WASHINGTON COUNTY", code: "42125" },
   { county: "WAYNE COUNTY", code: "42127" },
   { county: "WESTMORELAND COUNTY", code: "42129" },
   { county: "WYOMING COUNTY", code: "42131" },
   { county: "YORK COUNTY", code: "42133" },
   // { county: "RHODE ISLAND", code: "44000" },
   { county: "BRISTOL COUNTY", code: "44001" },
   { county: "KENT COUNTY", code: "44003" },
   { county: "NEWPORT COUNTY", code: "44005" },
   { county: "PROVIDENCE COUNTY", code: "44007" },
   { county: "WASHINGTON COUNTY", code: "44009" },
   // { county: "SOUTH CAROLINA", code: "45000" },
   { county: "ABBEVILLE COUNTY", code: "45001" },
   { county: "AIKEN COUNTY", code: "45003" },
   { county: "ALLENDALE COUNTY", code: "45005" },
   { county: "AND ERSON COUNTY", code: "45007" },
   { county: "BAMBERG COUNTY", code: "45009" },
   { county: "BARNWELL COUNTY", code: "45011" },
   { county: "BEAUFORT COUNTY", code: "45013" },
   { county: "BERKELEY COUNTY", code: "45015" },
   { county: "CALHOUN COUNTY", code: "45017" },
   { county: "CHARLESTON COUNTY", code: "45019" },
   { county: "CHEROKEE COUNTY", code: "45021" },
   { county: "CHESTER COUNTY", code: "45023" },
   { county: "CHESTERFIELD COUNTY", code: "45025" },
   { county: "CLARENDON COUNTY", code: "45027" },
   { county: "COLLETON COUNTY", code: "45029" },
   { county: "DARLINGTON COUNTY", code: "45031" },
   { county: "DILLON COUNTY", code: "45033" },
   { county: "DORCHESTER COUNTY", code: "45035" },
   { county: "EDGEFIELD COUNTY", code: "45037" },
   { county: "FAIRFIELD COUNTY", code: "45039" },
   { county: "FLORENCE COUNTY", code: "45041" },
   { county: "GEORGETOWN COUNTY", code: "45043" },
   { county: "GREENVILLE COUNTY", code: "45045" },
   { county: "GREENWOOD COUNTY", code: "45047" },
   { county: "HAMPTON COUNTY", code: "45049" },
   { county: "HORRY COUNTY", code: "45051" },
   { county: "JASPER COUNTY", code: "45053" },
   { county: "KERSHAW COUNTY", code: "45055" },
   { county: "LANCASTER COUNTY", code: "45057" },
   { county: "LAURENS COUNTY", code: "45059" },
   { county: "LEE COUNTY", code: "45061" },
   { county: "LEXINGTON COUNTY", code: " 45063" },
   { county: "MCCORMICK COUNTY", code: "45065" },
   { county: "MARION COUNTY", code: "45067" },
   { county: "MARLBORO COUNTY", code: "45069" },
   { county: "NEWBERR Y COUNTY", code: "45071" },
   { county: "OCONEE COUNTY", code: "45073" },
   { county: "ORANGEBURG COUNTY", code: "45075" },
   { county: "PICKENS COUNTY", code: "45077" },
   { county: "RICHLAND COUNTY", code: "45079" },
   { county: "SALUDA COUNTY", code: "45081" },
   { county: "SPARTANBURG COUNTY", code: "45083" },
   { county: "SUMTER COUNTY ", code: "45085" },
   { county: "UNION COUNTY", code: "45087" },
   { county: "WILLIAMSBURG COUNTY", code: "45089" },
   { county: "YORK COUNTY", code: "45091" },
   // { county: "SOUTH DAKOTA", code: "46000" },
   { county: "AURORA COUNTY", code: "46003" },
   { county: "BEADLE COUNTY", code: "46005" },
   { county: "BENNETT COUNTY", code: "46007" },
   { county: "BON HOMME COUNTY", code: "46009" },
   { county: "BROOKINGS COUNTY", code: "46011" },
   { county: "BROWN COUNTY", code: "46013" },
   { county: "BRULE COUNTY", code: "46015" },
   { county: "BUFFALO COUNTY", code: "46017" },
   { county: "BUTTE COUNTY", code: "46019" },
   { county: "CAMPBELL COUNTY", code: "46021" },
   { county: "CH ARLES MIX COUNTY", code: "46023" },
   { county: "CLARK COUNTY", code: "46025" },
   { county: "CLAY COUNTY", code: "46027" },
   { county: "CODINGTON COUNTY", code: "46029" },
   { county: "CORSON COUNTY", code: "46031" },
   { county: "CUSTER COUNTY", code: "46033" },
   { county: "DAVISON COUNTY", code: "46035" },
   { county: "DAY COUNTY", code: "46037" },
   { county: "DEUEL COUNTY", code: "46039" },
   { county: "DEWEY COUNTY", code: "46041" },
   { county: "DOUGLAS COUNTY", code: "46043" },
   { county: "EDMUNDS COUNTY", code: "46045" },
   { county: "FALL RIVER COUNTY", code: "46047" },
   { county: "FAULK COUNTY", code: "46049" },
   { county: "GRANT COUNTY", code: "46051" },
   { county: "GREGORY COUNTY", code: "46053" },
   { county: "HAAKON COUNTY", code: "46055" },
   { county: "HAMLIN COUNTY", code: "46057" },
   { county: "HAND COUNTY", code: "46059" },
   { county: "HANSON COUNTY", code: "46061" },
   { county: "HARDING COUNTY", code: "46063" },
   { county: "HUGHES COUNTY", code: "46065" },
   { county: "HUTCHINSON COUNTY", code: "46067" },
   { county: "HYDE COUNTY", code: "46069" },
   { county: "JACKSON COUNTY", code: "46071" },
   { county: "JERAULD COUNTY", code: "46073" },
   { county: " JONES COUNTY", code: "46075" },
   { county: "KINGSBURY COUNTY", code: "46077" },
   { county: "LAKE COUNTY", code: "46079" },
   { county: "LAWRENCE COUNTY", code: "46081" },
   { county: "LINCOLN COUNTY", code: "46083" },
   { county: "LYMAN COUNTY", code: "46085" },
   { county: "MCCOOK COUNTY", code: "46087" },
   { county: "MCPHERSON COUNTY", code: "46089" },
   { county: "MARSHALL COUNTY", code: "46091" },
   { county: "MEADE COUNTY", code: "46093" },
   { county: "MELLETTE COUNTY", code: "46095" },
   { county: "M INER COUNTY", code: "46097" },
   { county: "MINNEHAHA COUNTY", code: "46099" },
   { county: "MOODY COUNTY", code: "46101" },
   { county: "PENNINGTON COUNTY", code: "46103" },
   { county: "PERKINS COUNTY", code: "46105" },
   { county: "POTTER COUNTY", code: "46107" },
   { county: "ROBERTS COUNTY", code: "46109" },
   { county: "SANBORN COUNTY ", code: "46111" },
   { county: "SHANNON COUNTY", code: "46113" },
   { county: "SPINK COUNTY", code: "46115" },
   { county: "STANLEY COUNTY", code: "46117" },
   { county: "S ULLY COUNTY", code: "46119" },
   { county: "TODD COUNTY", code: "46121" },
   { county: "TRIPP COUNTY", code: "46123" },
   { county: "TURNER COUNTY", code: "46125" },
   { county: "UNION COUNTY", code: "46127" },
   { county: "WALWORTH COUNTY", code: "46129" },
   { county: "YANKTON COUNTY", code: "46135" },
   { county: "ZIEBACH COUNTY", code: "46137" },
   // { county: "TENNESSEE", code: "47000" },
   { county: "ANDERSON COUNTY", code: "47001" },
   { county: "BEDFORD COUNTY", code: "47003" },
   { county: "BENTON COUNTY", code: "47005" },
   { county: "BLEDSOE COUNTY", code: "47007" },
   { county: "BLOUNT COUNTY", code: "47009" },
   { county: "BRADLEY COUNTY", code: "47011" },
   { county: "CAMPBELL COUNTY", code: "47013" },
   { county: "CANNON COUNTY", code: "47015" },
   { county: "CARROLL COUNTY", code: "47017" },
   { county: "CARTER COUNTY", code: "47019" },
   { county: "CHEATHAM COUNTY", code: "47021" },
   { county: "CHESTER COUNTY", code: "47023" },
   { county: "CLAIBORNE COUNTY", code: "47025" },
   { county: "CLAY COUNTY", code: "47027" },
   { county: "COCKE COUNTY", code: "47029" },
   { county: "COFFEE COUNTY", code: "47031" },
   { county: "CROCKETT COUNTY", code: "47033" },
   { county: " CUMBERLAND COUNTY", code: "47035" },
   { county: "DAVIDSON COUNTY", code: "47037" },
   { county: "DECATUR COUNTY", code: "47039" },
   { county: "DEKALB COUNTY", code: "47041" },
   { county: "DICKSON COUNTY", code: "47043" },
   { county: "DYER COUNTY", code: "47045" },
   { county: "FAYETTE COUNTY", code: "47047" },
   { county: "FENTRESS COUNTY", code: "47049" },
   { county: "FRANKLIN COUNTY", code: "47051" },
   { county: "GIBSON COUNTY", code: "47053" },
   { county: "GILES COUNTY", code: "47055" },
   { county: "GRAINGER COUNTY", code: "47057" },
   { county: "GREENE COUNTY", code: "47059" },
   { county: "GRUNDY COUNTY", code: "47061" },
   { county: "HAMBLEN COUNTY", code: "47063" },
   { county: "HAMILTON COUNTY", code: "47065" },
   { county: "HANCOCK COUNTY", code: "47067" },
   { county: "HARDEMAN COUNTY", code: "47069" },
   { county: "HARDIN COUNTY", code: "47071" },
   { county: "HAWKINS COUNTY", code: "47073" },
   { county: "HAYWOOD COUNTY", code: "47075" },
   { county: "HENDERSON COUNTY", code: "47077" },
   { county: "HENRY COUNTY", code: "47079" },
   { county: "HICKMAN COUNTY", code: "47081" },
   { county: "HOUSTON COUNTY", code: "47083" },
   { county: "HUMPHREYS COUNTY", code: "47085" },
   { county: "JACKSON COUNTY", code: "47087" },
   { county: "JEFFERSON COUNTY", code: "47089" },
   { county: "JOHNSON COUNTY", code: "47091" },
   { county: "KNOX COUNTY", code: "47093" },
   { county: "LAKE COUNTY", code: "47095" },
   { county: "LAUDERDALE COUNTY", code: "47097" },
   { county: "LAWRENCE COUNTY", code: "47099" },
   { county: "LEWIS COUNTY", code: "47101" },
   { county: "LINCOLN COUNTY", code: "47103" },
   { county: "LOUDON COUNTY", code: "47105" },
   { county: "MCMINN COUNTY", code: "47107" },
   { county: "MCNAIRY COUNTY", code: "47109" },
   { county: "MACON COUNTY", code: "47111" },
   { county: "MADISON COUNTY", code: "47113" },
   { county: "MARION COUNTY", code: "47115" },
   { county: "MARSHALL COUNTY", code: "47117" },
   { county: "MAURY COUNTY", code: "47119" },
   { county: "MEIGS COUNTY", code: "47121" },
   { county: "M ONROE COUNTY", code: "47123" },
   { county: "MONTGOMERY COUNTY", code: "47125" },
   { county: "MOORE COUNTY", code: "47127" },
   { county: "MORGAN COUNTY", code: "47129" },
   { county: "OBION COUNTY", code: "47131" },
   { county: "OVERTON COUNTY", code: "47133" },
   { county: "PERRY COUNTY", code: "47135" },
   { county: "PICKETT COUNTY", code: "47137" },
   { county: "POLK COUNTY", code: "47139" },
   { county: "PUTNAM COUNTY", code: "47141" },
   { county: "RHEA COUNTY", code: "47143" },
   { county: "ROANE COUNTY", code: "47145" },
   { county: "ROBERTSON COUNTY", code: "47147" },
   { county: "RUTHERFORD COUNTY", code: "47149" },
   { county: "SCOTT COUNTY", code: "47151" },
   { county: "SEQUATCHIE COUNTY", code: "47153" },
   { county: "SEVIER COUNTY", code: "47155" },
   { county: "SHELBY COUNTY", code: "47157" },
   { county: "SMITH COUNTY", code: " 47159" },
   { county: "STEWART COUNTY", code: "47161" },
   { county: "SULLIVAN COUNTY", code: "47163" },
   { county: "SUMNER COUNTY", code: "47165" },
   { county: "TIPTON COUNTY", code: "47167" },
   { county: "TROUSDALE COUNTY", code: "47169" },
   { county: "UNICOI COUNTY", code: "47171" },
   { county: "UNION COUNTY", code: "47173" },
   { county: "VAN BUREN COUNTY", code: "47175" },
   { county: "WARREN COUNTY", code: "47177" },
   { county: "WASHINGTON COUNTY", code: "47179" },
   { county: "WAYNE COUNTY", code: "47181" },
   { county: "WEAKLEY COUNTY", code: "47183" },
   { county: "WHITE COUNTY", code: "47185" },
   { county: "WILLIAMSON COUNTY", code: "47187" },
   { county: "WILSON COUNTY", code: "47189" },
   // { county: "TEXAS", code: "48000" },
   { county: "ANDERSON COUNTY", code: "48001" },
   { county: "ANDREWS COUNTY", code: "48003" },
   { county: " ANGELINA COUNTY", code: "48005" },
   { county: "ARANSAS COUNTY", code: "48007" },
   { county: "ARCHER COUNTY", code: "48009" },
   { county: "ARMSTRONG COUNTY", code: "48011" },
   { county: "ATASCOSA COUNTY", code: "48013" },
   { county: "AUSTIN COUNTY", code: "48015" },
   { county: "BAILEY COUNTY", code: "48017" },
   { county: "BANDERA COUNTY", code: "48019" },
   { county: "BASTROP COUNTY", code: "48021" },
   { county: "BAYLOR COUNTY", code: "48023" },
   { county: "BEE COUNTY", code: "48025" },
   { county: "BE LL COUNTY", code: "48027" },
   { county: "BEXAR COUNTY", code: "48029" },
   { county: "BLANCO COUNTY", code: "48031" },
   { county: "BORDEN COUNTY", code: "48033" },
   { county: "BOSQUE COUNTY", code: "48035" },
   { county: "BOWIE COUNTY", code: "48037" },
   { county: "BRAZORIA COUNTY", code: "48039" },
   { county: "BRAZOS COUNTY", code: "48041" },
   { county: "BREWSTER COUNTY", code: "48043" },
   { county: "BRISCOE COUNTY", code: "48045" },
   { county: "BROOKS COUNTY", code: "48047" },
   { county: "BROWN COUNTY", code: "48049" },
   { county: "BURLESON COUNTY", code: "48051" },
   { county: "BURNET COUNTY", code: "48053" },
   { county: "CALDWELL COUNTY", code: "48055" },
   { county: "CALHOUN COUNTY", code: "48057" },
   { county: "CALLAHAN COUNTY", code: "48059" },
   { county: "CAMERON COUNTY", code: "48061" },
   { county: "CAMP COUNTY", code: "48063" },
   { county: "CARSON COUNTY", code: "48065" },
   { county: "CASS COUNTY", code: "48067" },
   { county: "CASTRO COUNTY", code: "48069" },
   { county: "CHAMBERS COUNTY", code: "48071" },
   { county: "CHEROKEE COUNTY", code: "48073" },
   { county: "CHILDRESS COUNTY", code: "48075" },
   { county: "CLAY COUNTY", code: "48077" },
   { county: " COCHRAN COUNTY", code: "48079" },
   { county: "COKE COUNTY", code: "48081" },
   { county: "COLEMAN COUNTY", code: "48083" },
   { county: "COLLIN COUNTY", code: "48085" },
   { county: "COLLINGSWORTH COUNTY", code: "48087" },
   { county: "COLORADO COUNTY", code: "48089" },
   { county: "COMAL COUNTY", code: "48091" },
   { county: "COMANCHE COUNTY", code: "48093" },
   { county: "CONCHO COUNTY", code: "48095" },
   { county: "COOKE COUNTY", code: "48097" },
   { county: "CORYELL COUNTY", code: "48099" },
   { county: "COTTLE COUNTY", code: "48101" },
   { county: "CRANE COUNTY", code: "48103" },
   { county: "CROCKETT COUNTY", code: "48105" },
   { county: "CROSBY COUNTY", code: "48107" },
   { county: "CULBERSON COUNTY", code: "48109" },
   { county: "DALLAM COUNTY", code: "48111" },
   { county: "DALLAS COUNTY", code: "48113" },
   { county: "DAWSON COUNTY", code: "48115" },
   { county: "DEAF SMITH COUNTY", code: "48117" },
   { county: "DELTA COUNTY", code: "48119" },
   { county: "DENTON COUNTY", code: "48121" },
   { county: "D EWITT COUNTY", code: "48123" },
   { county: "DICKENS COUNTY", code: "48125" },
   { county: "DIMMIT COUNTY", code: "48127" },
   { county: "DONLEY COUNTY", code: "48129" },
   { county: "DUVAL COUNTY", code: "48131" },
   { county: "EASTLAND COUNTY", code: "48133" },
   { county: "ECTOR COUNTY", code: "48135" },
   { county: "EDWARDS COUNTY", code: "48137" },
   { county: "ELLIS COUNTY", code: "48139" },
   { county: "EL PASO COUNTY", code: "48141" },
   { county: "ERATH COUNTY", code: "48143" },
   { county: "FALLS COUNTY", code: "48145" },
   { county: "FANNIN COUNTY", code: "48147" },
   { county: "FAYETTE COUNTY", code: "48149" },
   { county: "FISHER COUNTY", code: "48151" },
   { county: "FLOYD COUNTY", code: "48153" },
   { county: "FOARD COUNTY", code: "48155" },
   { county: "FORT BEND COUNTY", code: "48157" },
   { county: "FRANKLIN COUNTY", code: "48159" },
   { county: "FREESTONE COUNTY", code: "48161" },
   { county: "FRIO COUNTY", code: "48163" },
   { county: "GAINES COUNTY", code: "48165" },
   { county: "GALVESTON COUNTY", code: "48167" },
   { county: "GARZA COUNTY", code: "48169" },
   { county: "GILLESPIE COUNTY", code: "48171" },
   { county: "GLASSCOCK COUNTY", code: "48173" },
   { county: "GOLIAD COUNTY", code: "48175" },
   { county: "GONZALES COUNTY", code: "48177" },
   { county: "GRAY COUNTY", code: "48179" },
   { county: "GRAYSON COUNTY", code: "48181" },
   { county: "GREGG COUNTY", code: "48183" },
   { county: "GRIMES COUNTY", code: "48185" },
   { county: "GUADALUPE COUNTY", code: "48187" },
   { county: "HALE COUNTY", code: "48189" },
   { county: "HALL COUNTY", code: "48191" },
   { county: "HAMILTON COUNTY", code: "48193" },
   { county: "HANSFORD COUNTY", code: "48195" },
   { county: "H ARDEMAN COUNTY", code: "48197" },
   { county: "HARDIN COUNTY", code: "48199" },
   { county: "HARRIS COUNTY", code: "48201" },
   { county: "HARRISON COUNTY", code: "48203" },
   { county: "HARTLEY COUNTY", code: "48205" },
   { county: "HASKELL COUNTY", code: "48207" },
   { county: "HAYS COUNTY", code: "48209" },
   { county: "HEMPHILL COUNTY", code: "48211" },
   { county: "HENDERSON COUNTY", code: "48213" },
   { county: "HIDALGO COUNTY", code: "48215" },
   { county: "HILL COUNTY", code: "48217" },
   { county: "HO CKLEY COUNTY", code: "48219" },
   { county: "HOOD COUNTY", code: "48221" },
   { county: "HOPKINS COUNTY", code: "48223" },
   { county: "HOUSTON COUNTY", code: "48225" },
   { county: "HOWARD COUNTY", code: "48227" },
   { county: "HUDSPETH COUNTY", code: "48229" },
   { county: "HUNT COUNTY", code: "48231" },
   { county: "HUTCHINSON COUNTY", code: "48233" },
   { county: "IRION COUNTY", code: "48235" },
   { county: "JACK COUNTY", code: "48237" },
   { county: "JACKSON COUNTY", code: "48239" },
   { county: "JASPER COUNTY", code: "48241" },
   { county: "JEFF DAVIS COUNTY", code: "48243" },
   { county: "JEFFERSON COUNTY", code: "48245" },
   { county: "JIM HOGG COUNTY", code: "48247" },
   { county: "JIM WELLS COUNTY", code: "48249" },
   { county: "JOHNSON COUNTY", code: "48251" },
   { county: "JONES COUNTY", code: "48253" },
   { county: "KARNES COUNTY", code: "48255" },
   { county: "KAUFMAN COUNTY", code: "48257" },
   { county: "KENDALL COUNTY", code: "48259" },
   { county: "KENEDY COUNTY", code: "48261" },
   { county: "KEN T COUNTY", code: "48263" },
   { county: "KERR COUNTY", code: "48265" },
   { county: "KIMBLE COUNTY", code: "48267" },
   { county: "KING COUNTY", code: "48269" },
   { county: "KINNEY COUNTY", code: "48271" },
   { county: "KLEBERG COUNTY", code: "48273" },
   { county: "KNOX COUNTY", code: "48275" },
   { county: "LAMAR COUNTY", code: "48277" },
   { county: "LAMB COUNTY", code: "48279" },
   { county: "LAMPASAS COUNTY", code: "48281" },
   { county: "LA SALLE COUNTY", code: "48283" },
   { county: "LAVACA COUNTY", code: "48285" },
   { county: "LEE COUNTY", code: "48287" },
   { county: "LEON COUNTY", code: "48289" },
   { county: "LIBERTY COUNTY", code: "48291" },
   { county: "LIMESTONE COUNTY", code: "48293" },
   { county: "LIPSCOMB COUNTY", code: "48295" },
   { county: "LIVE OAK COUNTY", code: "48297" },
   { county: "LLANO COUNTY", code: "48299" },
   { county: "LOVING COUNTY", code: "48301" },
   { county: "LUBBOCK COUNTY", code: "48303" },
   { county: "LYNN COUNTY", code: "48305" },
   { county: "MCCULLOCH COUNTY", code: " 48307" },
   { county: "MCLENNAN COUNTY", code: "48309" },
   { county: "MCMULLEN COUNTY", code: "48311" },
   { county: "MADISON COUNTY", code: "48313" },
   { county: "MARION COUNTY", code: "48315" },
   { county: "MARTIN COUNTY", code: "48317" },
   { county: "MASON COUNTY", code: "48319" },
   { county: "MATAGORDA COUNTY", code: "48321" },
   { county: "MAVERICK COUNTY", code: "48323" },
   { county: "MEDINA COUNTY", code: "48325" },
   { county: "MENARD COUNTY", code: "48327" },
   { county: "MIDLAND COUNTY", code: "48329" },
   { county: "MILAM COUNTY", code: "48331" },
   { county: "MILLS COUNTY", code: "48333" },
   { county: "MITCHELL COUNTY", code: "48335" },
   { county: "MONTAGUE COUNTY", code: "48337" },
   { county: "MONTGOMERY COUNTY", code: "48339" },
   { county: "MOORE COUNTY", code: "48341" },
   { county: "MORRIS COUNTY", code: "48343" },
   { county: "MOTLEY COUNTY", code: "48345" },
   { county: "NACOGDOCHES COUNTY", code: "48347" },
   { county: "NAVARRO COUNTY", code: "48349" },
   { county: "NEWTON COUNTY", code: "48351" },
   { county: "NOLAN COUNTY", code: "48353" },
   { county: "NUECES COUNTY", code: "48355" },
   { county: "OCHILTREE COUNTY", code: "48357" },
   { county: "OLDHAM COUNTY", code: "48359" },
   { county: "ORANGE COUNTY", code: "48361" },
   { county: "PALO PINTO COUNTY", code: "48363" },
   { county: "PANOLA COUNTY", code: "48365" },
   { county: "PARKER COUNTY", code: "48367" },
   { county: "PARMER COUNTY", code: "48369" },
   { county: "PECOS COUNTY", code: "48371" },
   { county: "POLK COUNTY", code: "48373" },
   { county: "POTTER COUNTY", code: "48375" },
   { county: "PRESIDIO COUNTY", code: "48377" },
   { county: "RAINS COUNTY", code: "48379" },
   { county: "RANDALL COUNTY ", code: "48381" },
   { county: "REAGAN COUNTY", code: "48383" },
   { county: "REAL COUNTY", code: "48385" },
   { county: "RED RIVER COUNTY", code: "48387" },
   { county: "R EEVES COUNTY", code: "48389" },
   { county: "REFUGIO COUNTY", code: "48391" },
   { county: "ROBERTS COUNTY", code: "48393" },
   { county: "ROBERTSON COUNTY", code: "48395" },
   { county: "ROCKWALL COUNTY", code: "48397" },
   { county: "RUNNELS COUNTY", code: "48399" },
   { county: "RUSK COUNTY", code: "48401" },
   { county: "SABINE COUNTY", code: "48403" },
   { county: "SAN AUGUSTINE COUNTY", code: "48405" },
   { county: "SAN JACINTO COUNTY", code: "48407" },
   { county: "SAN PATRICIO COUNTY", code: "48409" },
   { county: "SAN SABA COUNTY", code: "48411" },
   { county: "SCHLEICHER COUNTY", code: "48413" },
   { county: "SCURRY COUNTY", code: "48415" },
   { county: "SHACKELFORD COUNTY", code: "48417" },
   { county: "SHELBY COUNTY", code: "48419" },
   { county: "SHERMAN COUNTY", code: "48421" },
   { county: "SMITH COUNTY", code: "48423" },
   { county: "SOMERVELL COUNTY", code: "48425" },
   { county: "STARR COUNTY", code: "48427" },
   { county: "STEPHENS COUNTY", code: "48429" },
   { county: "STERLING COUNTY", code: "48431" },
   { county: "STONEWALL COUNTY", code: "48433" },
   { county: "SUTTON COUNTY", code: "48435" },
   { county: "SWISHER COUNTY", code: "48437" },
   { county: "TARRA NT COUNTY", code: "48439" },
   { county: "TAYLOR COUNTY", code: "48441" },
   { county: "TERRELL COUNTY", code: "48443" },
   { county: "TERRY COUNTY", code: "48445" },
   { county: "THROCKMORTON COUNTY", code: "48447" },
   { county: "TITUS COUNTY", code: "48449" },
   { county: "TOM GREEN COUNTY", code: "48451" },
   { county: "TRAVIS COUNTY", code: "48453" },
   { county: "TRINITY COUNTY", code: "48455" },
   { county: "TYLER COUNTY", code: "48457" },
   { county: "UPSHUR COUNTY", code: "48459" },
   { county: "UPTON COUNTY", code: "48461" },
   { county: "UVALDE COUNTY", code: "48463" },
   { county: "VAL VERDE COUNTY", code: "48465" },
   { county: "VAN ZANDT COUNTY", code: "48467" },
   { county: "VICTORIA COUNTY", code: "48469" },
   { county: "WALKER COUNTY", code: "48471" },
   { county: "WALLER COUNTY", code: "48473" },
   { county: "WARD COUNTY", code: "48475" },
   { county: "WASHINGTON COUNTY", code: "48477" },
   { county: "WEBB COUNTY", code: "48479" },
   { county: "WHARTON COUNTY", code: "48481" },
   { county: "WHEELE R COUNTY", code: "48483" },
   { county: "WICHITA COUNTY", code: "48485" },
   { county: "WILBARGER COUNTY", code: "48487" },
   { county: "WILLACY COUNTY", code: "48489" },
   { county: "WILLIAMSON COUNTY", code: "48491" },
   { county: "WILSON COUNTY", code: "48493" },
   { county: "WINKLER COUNTY", code: "48495" },
   { county: "WISE COUNTY", code: "48497" },
   { county: "WOOD COUNTY", code: "48499" },
   { county: "YOAKUM COUNTY", code: "48501" },
   { county: "YOUNG COUNTY", code: "48503" },
   { county: "ZAPATA COUNTY", code: "48505" },
   { county: "ZAVALA COUNTY", code: "48507" },
   // { county: "UTAH", code: "49000" },
   { county: "BEAVER COUNTY", code: "49001" },
   { county: "BOX ELD ER COUNTY", code: "49003" },
   { county: "CACHE COUNTY", code: "49005" },
   { county: "CARBON COUNTY", code: "49007" },
   { county: "DAGGETT COUNTY", code: "49009" },
   { county: "DAVIS COUNTY", code: "49011" },
   { county: "DUCHESNE COUNTY", code: "49013" },
   { county: "EMERY COUNTY", code: "49015" },
   { county: "GARFIELD COUNTY", code: "49017" },
   { county: "GRAND COUNTY", code: "49019" },
   { county: "IRON COUNTY", code: "49021" },
   { county: "JUAB COUNTY", code: "49023" },
   { county: "KANE COUNTY", code: "49025" },
   { county: "MILLARD COUNTY", code: "49027" },
   { county: "MORGAN COUNTY", code: "49029" },
   { county: "PIUTE COUNTY", code: "49031" },
   { county: "RICH COUNTY", code: "49033" },
   { county: "SALT LAKE COUNTY", code: "49035" },
   { county: "SAN JUAN COUNTY", code: "49037" },
   { county: "SANPETE COUNTY", code: "49039" },
   { county: "SEVIER COUNTY", code: "49041" },
   { county: "SUMMIT COUNTY", code: "49043" },
   { county: "TOOELE COUNTY", code: "49045" },
   { county: "UINTAH COUNTY", code: " 49047" },
   { county: "UTAH COUNTY", code: "49049" },
   { county: "WASATCH COUNTY", code: "49051" },
   { county: "WASHINGTON COUNTY", code: "49053" },
   { county: "WAYNE COUNTY", code: "49055" },
   { county: "WEBER COUNTY", code: "49057" },
   // { county: "VERMONT", code: "50000" },
   { county: "ADDISON COUNTY", code: "50001" },
   { county: "BENNI NGTON COUNTY", code: "50003" },
   { county: "CALEDONIA COUNTY", code: "50005" },
   { county: "CHITTENDEN COUNTY", code: "50007" },
   { county: "ESSEX COUNTY", code: "50009" },
   { county: "FRANKLIN COUNTY", code: "50011" },
   { county: "GRAND ISLE COUNTY", code: "50013" },
   { county: "LAMOILLE COUNTY", code: "50015" },
   { county: "ORANGE COUNTY", code: "50017" },
   { county: "ORLEANS COUNTY", code: "50019" },
   { county: "RUTLAND COUNTY", code: "50021" },
   { county: "WASHINGTON COUNTY", code: "50023" },
   { county: "WINDHAM COUNTY", code: "50025" },
   { county: "WINDSOR COUNTY", code: "50027" },
   // { county: "VIRGINIA", code: "51000" },
   { county: "ACCOMACK COUNTY", code: "51001" },
   { county: "ALBEMARLE COUNTY", code: "51003" },
   { county: "ALLEGHANY COUNTY", code: "51005" },
   { county: "AMELIA COUNTY", code: "51007" },
   { county: "AMHER ST COUNTY", code: "51009" },
   { county: "APPOMATTOX COUNTY", code: "51011" },
   { county: "ARLINGTON COUNTY", code: "51013" },
   { county: "AUGUSTA COUNTY", code: "51015" },
   { county: "BATH COUNTY", code: "51017" },
   { county: "BEDFORD COUNTY", code: "51019" },
   { county: "BLAND COUNTY", code: "51021" },
   { county: "BOTETOURT COUNTY", code: "51023" },
   { county: "BRUNSWICK COUNTY", code: "51025" },
   { county: "BUCHANAN COUNTY", code: "51027" },
   { county: "BUCKINGHAM COUNTY", code: "51029" },
   { county: "CAMPBELL COUNTY", code: "51031" },
   { county: "CAROLINE COUNTY", code: "51033" },
   { county: "CARROLL COUNTY", code: "51035" },
   { county: "CHARLES CITY COUNTY", code: "51036" },
   { county: "CHARLOTTE COUNTY", code: "51037" },
   { county: "CHESTERFIELD COUNTY", code: "51041" },
   { county: "CLARKE COUNTY", code: "51043" },
   { county: "CRAIG COUNTY", code: "51045" },
   { county: "CULPEPER COUNTY", code: "51047" },
   { county: "CUMBERLAND COUNTY", code: "51049" },
   { county: "DICKENSON COUNTY", code: "51051" },
   { county: "DINWIDDIE COUNTY", code: "51053" },
   { county: "ESSEX COUNTY", code: "51057" },
   { county: "FAIRFAX COUNTY", code: "51059" },
   { county: "FAUQ UIER COUNTY", code: "51061" },
   { county: "FLOYD COUNTY", code: "51063" },
   { county: "FLUVANNA COUNTY", code: "51065" },
   { county: "FRANKLIN COUNTY", code: "51067" },
   { county: "FREDERICK COUNTY", code: "51069" },
   { county: "GILES COUNTY", code: "51071" },
   { county: "GLOUCESTER COUNTY", code: "51073" },
   { county: "GOOCHLAND COUNTY", code: "51075" },
   { county: "GRAYSON COUNTY", code: "51077" },
   { county: "GREENE COUNTY", code: "51079" },
   { county: "GREENSVILLE COUNTY", code: "51081" },
   { county: "HALIFAX COUNTY", code: "51083" },
   { county: "HANOVER COUNTY", code: "51085" },
   { county: "HENRICO COUNTY", code: "51087" },
   { county: "HENRY COUNTY", code: "51089" },
   { county: "HIGHLAND COUNTY", code: "51091" },
   { county: "ISLE OF WIGHT COUNTY", code: "51093" },
   { county: "JAMES CITY COUNTY", code: "51095" },
   { county: "KING AND QUEEN COUNTY", code: "51097" },
   { county: "KING GEORGE COUNTY", code: "51099" },
   { county: "KING WILLIAM COUNTY", code: "51101" },
   { county: "LANCASTER COUNTY", code: "51103" },
   { county: "LEE COUNTY", code: "51105" },
   { county: "LOUDOUN COUNTY", code: "51107" },
   { county: "LOUISA COUNTY", code: "51109" },
   { county: "LUNENBURG COUNTY", code: "51111" },
   { county: "MADISON COUNTY", code: "51113" },
   { county: "MATHEWS COUNTY", code: "51115" },
   { county: "MECKLENBURG COUNTY", code: "51117" },
   { county: "MIDDLESEX COUNTY", code: "51119" },
   { county: "MONTGOMERY COUNTY", code: "51121" },
   { county: "NELSON COUNTY", code: "51125" },
   { county: "N EW KENT COUNTY", code: "51127" },
   { county: "NORTHAMPTON COUNTY", code: "51131" },
   { county: "NORTHUMBERLAND COUNTY", code: "51133" },
   { county: "NOTTOWAY COUNTY", code: "51135" },
   { county: "ORANGE COUNTY", code: "51137" },
   { county: "PAGE COUNTY", code: "51139" },
   { county: "PATRICK COUNTY", code: "51141" },
   { county: "PITTS YLVANIA COUNTY", code: "51143" },
   { county: "POWHATAN COUNTY", code: "51145" },
   { county: "PRINCE EDWARD COUNTY", code: "51147" },
   { county: "PRINCE GEORGE COUNTY", code: "51149" },
   { county: "PRINCE WILLIAM COUNTY", code: "51153" },
   { county: "PULASKI COUNTY", code: "51155" },
   { county: "RAPPAHANNOCK COUNTY", code: "51157" },
   { county: "RICHMOND COUNTY", code: "51159" },
   { county: "ROANOKE COUNTY", code: "51161" },
   { county: "ROCKBRIDGE COUNTY", code: "51163" },
   { county: "ROCKINGHAM COUNTY", code: "51165" },
   { county: "RUSSELL COUNTY", code: "51167" },
   { county: "SCOTT COUNTY", code: "51169" },
   { county: "SHENANDOAH COUNTY", code: "51171" },
   { county: "SMYTH COUNTY", code: "51173" },
   { county: "SOUTHAMPTON COUNTY", code: "51175" },
   { county: "SPOTSYLVANIA COUNTY", code: "51177" },
   { county: "STAFFORD COUNTY", code: "51179" },
   { county: "SURRY COUNTY", code: "51181" },
   { county: "SUSSEX COUNTY", code: "51183" },
   { county: "TAZEWELL COUNTY", code: "51185" },
   { county: " WARREN COUNTY", code: "51187" },
   { county: "WASHINGTON COUNTY", code: "51191" },
   { county: "WESTMORELAND COUNTY", code: "51193" },
   { county: "WISE COUNTY", code: " 51195" },
   { county: "WYTHE COUNTY", code: "51197" },
   { county: "YORK COUNTY", code: "51199" },
   { county: "ALEXANDRIA CITY", code: "51510" },
   { county: "BEDFORD CITY", code: "51515" },
   { county: "BRISTOL CITY", code: "51520" },
   { county: "BUENA VISTA CITY", code: "51530" },
   { county: "CHARLOTTESVILLE CITY", code: "51540" },
   { county: "CHESAPEAKE CITY", code: "51550" },
   { county: "CLIFTON FORGE CITY", code: "51560" },
   { county: "COLONIAL HEIGHTS CITY", code: "51570" },
   { county: "COVINGTON CITY", code: "51580" },
   { county: "DANVILLE CITY", code: "51590" },
   { county: "EMPORIA CITY", code: "51595" },
   { county: "FAIRFAX CITY", code: "51600" },
   { county: " FALLS CHURCH CITY", code: "51610" },
   { county: "FRANKLIN CITY", code: "51620" },
   { county: "FREDERICKSBURG CITY", code: "51630" },
   { county: "GALAX CITY", code: "51640" },
   { county: "HAMPTON CITY", code: "51650" },
   { county: "HARRISONBURG CITY", code: "51660" },
   { county: "HOPEWELL CITY", code: "51670" },
   { county: "LEXINGTON CITY", code: "51678" },
   { county: "LYNCHBURG CITY", code: "51680" },
   { county: "MANASSAS CITY", code: "51683" },
   { county: "MANASSAS PARK CITY", code: "51685" },
   { county: "MARTINSVILLE CITY", code: "51690" },
   { county: "NEWPORT NEWS CITY", code: "51700" },
   { county: "NORFOLK CITY", code: "51710" },
   { county: "NORTON CITY", code: "51720" },
   { county: "PETERSBURG CITY", code: "51730" },
   { county: "POQUOSON CITY", code: "51735" },
   { county: "PORTSMOUTH CITY", code: "51740" },
   { county: "RAD FORD CITY", code: "51750" },
   { county: "RICHMOND CITY", code: "51760" },
   { county: "ROANOKE CITY", code: "51770" },
   { county: "SALEM CITY", code: "51775" },
   { county: "SOUTH BOSTON CITY", code: "51780" },
   { county: "STAUNTON CITY", code: "51790" },
   { county: "SUFFOLK CITY", code: "51800" },
   { county: "VIRGINIA BEACH CITY", code: "51810" },
   { county: "WAYNESBORO CITY", code: "51820" },
   { county: "WILLIAMSBURG CITY", code: "51830" },
   { county: "WINCHESTER CITY", code: "51840" },
   // { county: "WASHINGTON", code: "53000" },
   { county: "ADAMS COUNTY", code: "53001" },
   { county: "ASOTIN COUNTY", code: "53003" },
   { county: "BENTON COUNTY", code: "53005" },
   { county: "CHELAN COUNTY", code: "53007" },
   { county: "CLALLAM COUNTY", code: "53009" },
   { county: "CLARK COUNTY", code: "53011" },
   { county: "COLUMBIA COUNTY", code: "53013" },
   { county: "COWLITZ COUNTY", code: "53015" },
   { county: "DOUGLAS COUNTY", code: "53017" },
   { county: "FERRY COUNTY", code: "53019" },
   { county: "FRANKLIN COUNTY", code: "53021" },
   { county: "GARFIELD COUNTY", code: "53023" },
   { county: "GRANT COUNTY", code: "53025" },
   { county: "GRAYS HARBOR COUNTY", code: "53027" },
   { county: "ISLAND COUNTY", code: "53029" },
   { county: "JEFFERSON COUNTY", code: "53031" },
   { county: "KING COUNTY", code: "53033" },
   { county: "KITSAP COUNTY", code: "53035" },
   { county: "KITTITAS COUNTY", code: "53037" },
   { county: "KLICKITAT COUNTY", code: "53039" },
   { county: "LEWIS COUNTY", code: "53041" },
   { county: "LINCOLN COUNTY", code: "53043" },
   { county: "MASON COUNTY", code: "53045" },
   { county: "OKANOGAN COUNTY", code: "53047" },
   { county: "PACIFIC COUNTY", code: "53049" },
   { county: "PEND OREILLE COUNTY", code: "53051" },
   { county: "PIERCE COUNTY", code: "53053" },
   { county: "SAN JUAN COUNTY", code: "53055" },
   { county: "SKAGIT COUNTY", code: "53057" },
   { county: "SKAMANIA COUNTY", code: "53059" },
   { county: "SNOHOMISH COUNTY", code: "53061" },
   { county: "SPOKANE COUNTY", code: "53063" },
   { county: "STEVENS COUNTY", code: "53065" },
   { county: "THURSTON COUNTY", code: "53067" },
   { county: "WAHKIAKUM COUNTY", code: "53069" },
   { county: "WALLA WALLA COUNTY", code: "53071" },
   { county: "WHATCOM COUNTY", code: "53073" },
   { county: "WHITMAN COUNTY", code: "53075" },
   { county: "YAKIMA COUNTY", code: "53077" },
   // { county: "WEST VIRGINIA", code: "54000" },
   { county: "BARBOUR COUNTY", code: "54001" },
   { county: "BERKELEY COUNTY", code: "54003" },
   { county: "BOONE COUNTY", code: "54005" },
   { county: "BRAXTON COUNTY", code: "54007" },
   { county: "BROOKE COUNTY", code: "54009" },
   { county: "CABELL COUNTY", code: "54011" },
   { county: "CALHOUN COUNTY", code: "54013" },
   { county: "CLAY COUNTY", code: "54015" },
   { county: "DODDRIDGE COUNTY", code: "54017" },
   { county: "FAYETTE COUNTY", code: "54019" },
   { county: "GILMER COUNTY", code: "54021" },
   { county: "GRANT COUNTY", code: "54023" },
   { county: "GREENBRIER COUNTY", code: "54025" },
   { county: "HAMPSHIRE COUNTY", code: "54027" },
   { county: "HANCOCK COUNTY", code: "54029" },
   { county: "HARDY COUNTY", code: "54031" },
   { county: "HARRISON COUNTY", code: "54033" },
   { county: "JACKSON COUNTY", code: "54035" },
   { county: "JEFFERSON COUNTY", code: "54037" },
   { county: "KANAWHA COUNTY", code: "54039" },
   { county: "LEWIS COUNTY", code: "54041" },
   { county: "LINCOLN COUNTY", code: "54043" },
   { county: "LOGAN COUNTY", code: "54045" },
   { county: "MCDOWELL COUNTY", code: "54047" },
   { county: "MARION COUNTY", code: "54049" },
   { county: "MARSHALL COUNTY", code: "54051" },
   { county: "MASON COUNTY", code: "54053" },
   { county: "MERCER COUNTY", code: "54055" },
   { county: "MINERAL COUNTY", code: "54057" },
   { county: "MINGO COUNTY", code: "54059" },
   { county: "MONONGALIA COUNTY", code: "54061" },
   { county: "MONROE COUNTY", code: "54063" },
   { county: "MORGAN COUNTY", code: "54065" },
   { county: "NICHOLAS COUNTY", code: "54067" },
   { county: "OHIO COUNTY", code: "54069" },
   { county: "PENDLETON COUNTY", code: "54071" },
   { county: "PLEASANTS COUNTY", code: "54073" },
   { county: "POCAHONTAS COUNTY", code: "54075" },
   { county: "PRESTON COUNTY", code: "54077" },
   { county: "PUTNAM COUNTY", code: "54079" },
   { county: "RALEIGH COUNTY", code: "54081" },
   { county: "RANDOLPH COUNTY", code: "54083" },
   { county: "RITCHIE COUNTY", code: "54085" },
   { county: " ROANE COUNTY", code: "54087" },
   { county: "SUMMERS COUNTY", code: "54089" },
   { county: "TAYLOR COUNTY", code: "54091" },
   { county: "TUCKER COUNTY", code: "54093" },
   { county: "TYLER COUNTY", code: "54095" },
   { county: "UPSHUR COUNTY", code: "54097" },
   { county: "WAYNE COUNTY", code: "54099" },
   { county: "WEBSTER COUNTY", code: "54101" },
   { county: "WETZEL COUNTY", code: "54103" },
   { county: "WIRT COUNTY", code: "54105" },
   { county: "WOOD COUNTY", code: "54107" },
   { county: "WYOMING COUNTY ", code: "54109" },
   // { county: "WISCONSIN", code: "55000" },
   { county: "ADAMS COUNTY", code: "55001" },
   { county: "ASHLAND COUNTY", code: "55003" },
   { county: "BARRON COUNTY", code: "55005" },
   { county: "BAYFIELD COUNTY", code: "55007" },
   { county: "BROWN COUNTY", code: "55009" },
   { county: "BUFFALO COUNTY", code: "55011" },
   { county: "BURNETT COUNTY", code: "55013" },
   { county: "CALUMET COUNTY", code: "55015" },
   { county: "CHIPPEWA COUNTY", code: "55017" },
   { county: "CLARK COUNTY", code: "55019" },
   { county: "COLUMBIA COUNTY", code: "55021" },
   { county: "CRAWFORD COUNTY", code: "55023" },
   { county: "DANE COUNTY", code: "55025" },
   { county: "DODGE COUNTY", code: "55027" },
   { county: "DOOR COUNTY", code: "55029" },
   { county: "DOUGLAS COUNTY", code: "55031" },
   { county: "DUNN COUNTY", code: "55033" },
   { county: "E AU CLAIRE COUNTY", code: "55035" },
   { county: "FLORENCE COUNTY", code: "55037" },
   { county: "FOND DU LAC COUNTY", code: "55039" },
   { county: "FOREST COUNTY", code: "55041" },
   { county: "GRANT COUNTY", code: "55043" },
   { county: "GREEN COUNTY", code: "55045" },
   { county: "GREEN LAKE COUNTY", code: "55047" },
   { county: "IOWA COUNTY", code: "55049" },
   { county: "IRON COUNTY", code: "55051" },
   { county: "JACKSON COUNTY", code: "55053" },
   { county: "JEFFERSON COUNTY", code: "55055" },
   { county: "JUNEAU COUNTY", code: "55057" },
   { county: "KENOSHA COUNTY", code: "55059" },
   { county: "KEWAUNEE COUNTY", code: "55061" },
   { county: "LA CROSSE COUNTY", code: "55063" },
   { county: "LAFAYETTE COUNTY", code: "55065" },
   { county: "LANGLADE COUNTY", code: "55067" },
   { county: "LINCOLN COUNTY", code: "55069" },
   { county: "MANIT OWOC COUNTY", code: "55071" },
   { county: "MARATHON COUNTY", code: "55073" },
   { county: "MARINETTE COUNTY", code: "55075" },
   { county: "MARQUETTE COUNTY", code: "55077" },
   { county: "MENOMINEE COUNTY", code: "55078" },
   { county: "MILWAUKEE COUNTY", code: "55079" },
   { county: "MONROE COUNTY", code: "55081" },
   { county: "OCONTO COUNTY", code: "55083" },
   { county: "ONEIDA COUNTY", code: "55085" },
   { county: "OUTAGAMIE COUNTY", code: "55087" },
   { county: "OZAUKEE COUNTY", code: "55089" },
   { county: "PEPIN COUNTY", code: "55091" },
   { county: "PIERCE COUNTY", code: "55093" },
   { county: "POLK COUNTY", code: "55095" },
   { county: "PORTAGE COUNTY", code: "55097" },
   { county: "PRICE COUNTY", code: "55099" },
   { county: "RACINE COUNTY", code: "55101" },
   { county: "RICHLAND COUNTY", code: "55103" },
   { county: "ROCK COUNTY", code: "55105" },
   { county: "RUSK COUNTY", code: "55107" },
   { county: "ST. CROIX COUNTY", code: "55109" },
   { county: "SAUK COUNTY", code: "55111" },
   { county: "SAWYER COUNTY", code: "55113" },
   { county: "SHAWANO COUNTY", code: "55115" },
   { county: "SHEBOYGAN COUNTY", code: "55117" },
   { county: "TAYLOR COUNTY", code: "55119" },
   { county: "TREMPEALEAU COUNTY", code: "55121" },
   { county: "VERNON COUNTY", code: "55123" },
   { county: "VILAS COUNTY", code: "55125" },
   { county: "WALWORTH COUNTY", code: "55127" },
   { county: "WASHBURN COUNTY", code: "55129" },
   { county: "WASHINGTON COUNTY", code: "55131" },
   { county: "WAUKESHA COUNTY", code: "55133" },
   { county: "WAUPACA COUNTY", code: "55135" },
   { county: "WAUSHARA COUNTY", code: "55137" },
   { county: "WINNEBAGO COUNTY", code: "55139" },
   { county: "WOOD COUNTY", code: "55141" },
   // { county: "WYOMING", code: "56000" },
   { county: "ALBANY COUNTY", code: "56001" },
   { county: "BIG HORN COUNTY", code: "56003" },
   { county: "CAMPBELL COUNTY", code: "56005" },
   { county: "CARBON COUNTY", code: "56007" },
   { county: "CONVERSE COUNTY", code: "56009" },
   { county: "CROOK COUNTY", code: "56011" },
   { county: "FRE MONT COUNTY", code: "56013" },
   { county: "GOSHEN COUNTY", code: "56015" },
   { county: "HOT SPRINGS COUNTY", code: "56017" },
   { county: "JOHNSON COUNTY", code: "56019" },
   { county: "LARAMIE COUNTY", code: "56021" },
   { county: "LINCOLN COUNTY", code: "56023" },
   { county: "NATRONA COUNTY", code: "56025" },
   { county: "NIOBRARA COUNTY", code: "56027" },
   { county: "PARK COUNTY", code: "56029" },
   { county: "PLATTE COUNTY", code: "56031" },
   { county: "SHERIDAN COUNTY", code: "56033" },
   { county: " SUBLETTE COUNTY", code: "56035" },
   { county: "SWEETWATER COUNTY", code: "56037" },
   { county: "TETON COUNTY", code: "56039" },
   { county: "UINTA COUNTY", code: "56041" },
   { county: "WASHAKIE COUNTY", code: "56043" },
   { county: "WESTON COUNTY", code: "56045" },
];

export default countiesArr;
