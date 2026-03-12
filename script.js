"use strict";

const kanjiData = [
  {
      char: "一",
      onyomi: "イチ, イツ",
      kunyomi: "ひと, ひと.つ",
      meanings: {
        ru: "один",
        uz: "bir",
      },
      words: [
        {
          kanji: "一つ",
          kana: "ひとつ",
          mean_ru: "одна штука",
          mean_uz: "bitta",
        },
        {
          kanji: "一人",
          kana: "ひとり",
          mean_ru: "один человек",
          mean_uz: "bir kishi",
        },
        {
          kanji: "一番",
          kana: "いちばん",
          mean_ru: "самый, номер один",
          mean_uz: "eng, birinchi raqamli",
        },
      ],
      sentence: {
        jp: "生ビールを一つお願いします。",
        rubyData: [
          { kanji: "生", reading: "なま" },
          { text: "ビールを" },
          { kanji: "一", reading: "ひと" },
          { text: "つお" },
          { kanji: "願", reading: "ねが" },
          { text: "いします。" },
        ],
        translation: {
          ru: "Извините, одно разливное пиво, пожалуйста.",
          uz: "Kechirasiz, bitta quyma pivo bering.",
        },
        grammarPoint: {
          ru: "〜をお願いします — фраза-выручалочка для заказа в ресторане или покупок. Называете предмет, количество и эту форму. <ruby>一<rt>ひと</rt></ruby>つ = «одна штука».",
          uz: "〜をお願いします — restoranda buyurtma berish uchun eng kerakli ibora. Buyum nomini aytib, shu formani qo'shasiz. <ruby>一<rt>ひと</rt></ruby>つ = «bitta».",
        },
      },
    },
    {
      char: "七",
      onyomi: "シチ",
      kunyomi: "なな, なな.つ",
      meanings: {
        ru: "семь",
        uz: "yetti",
      },
      words: [
        {
          kanji: "七つ",
          kana: "ななつ",
          mean_ru: "семь штук",
          mean_uz: "yettita",
        },
        {
          kanji: "七時",
          kana: "しちじ",
          mean_ru: "семь часов",
          mean_uz: "soat yetti",
        },
        {
          kanji: "七日",
          kana: "なのか",
          mean_ru: "седьмое число",
          mean_uz: "yettinchi sana",
        },
      ],
      sentence: {
        jp: "明日の朝七時に駅前で待ち合わせましょう。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "の" },
          { kanji: "朝", reading: "あさ" },
          { kanji: "七時", reading: "しちじ" },
          { text: "に" },
          { kanji: "駅前", reading: "えきまえ" },
          { text: "で" },
          { kanji: "待", reading: "ま" },
          { text: "ち" },
          { kanji: "合", reading: "あ" },
          { text: "わせましょう。" },
        ],
        translation: {
          ru: "Давайте встретимся завтра утром в семь перед станцией.",
          uz: "Ertaga ertalab soat yettida bekat oldida ko'rishamiz.",
        },
        grammarPoint: {
          ru: "Частица に ставится после точного времени. А форма 〜ましょう — идеальный способ предложить встречу или совместное действие.",
          uz: "に yuklamasi aniq vaqtdan keyin qo'yiladi. 〜ましょう shakli esa biror ishni birgalikda qilishni taklif etishning eng zo'r usulidir.",
        },
      },
    },
    {
      char: "万",
      onyomi: "マン, バン",
      kunyomi: "",
      meanings: {
        ru: "десять тысяч",
        uz: "o'n ming",
      },
      words: [
        {
          kanji: "一万円",
          kana: "いちまんえん",
          mean_ru: "десять тысяч иен",
          mean_uz: "o'n ming iyen",
        },
        {
          kanji: "万一",
          kana: "まんいち",
          mean_ru: "в крайнем случае",
          mean_uz: "mabodo",
        },
        {
          kanji: "数万",
          kana: "すうまん",
          mean_ru: "десятки тысяч",
          mean_uz: "o'n minglab",
        },
      ],
      sentence: {
        jp: "一万円札でお釣りはありますか。",
        rubyData: [
          { kanji: "一万円札", reading: "いちまんえんさつ" },
          { text: "でお" },
          { kanji: "釣", reading: "つ" },
          { text: "りはありますか。" },
        ],
        translation: {
          ru: "У вас будет сдача с купюры в десять тысяч иен?",
          uz: "O'n ming iyenlik puldan qaytimingiz bormi?",
        },
        grammarPoint: {
          ru: "Частица で здесь показывает инструмент или средство. Очень частая фраза в такси и мелких лавках при оплате крупной купюрой.",
          uz: "Bu yerda で yuklamasi vosita yoki usulni bildiradi. Katta pulni uzatib, qaytim bera olasizmi deb so'rash uchun taksi va kichik do'konlarda ko'p ishlatiladi.",
        },
      },
    },
    {
      char: "三",
      onyomi: "サン",
      kunyomi: "み, み.つ, みっ.つ",
      meanings: {
        ru: "три",
        uz: "uch",
      },
      words: [
        {
          kanji: "三つ",
          kana: "みっつ",
          mean_ru: "три штуки",
          mean_uz: "uchta",
        },
        {
          kanji: "三日",
          kana: "みっか",
          mean_ru: "три дня",
          mean_uz: "uch kun",
        },
        {
          kanji: "三人",
          kana: "さんにん",
          mean_ru: "три человека",
          mean_uz: "uch kishi",
        },
      ],
      sentence: {
        jp: "レストランの予約は三名で入っています。",
        rubyData: [
          { text: "レストランの" },
          { kanji: "予約", reading: "よやく" },
          { text: "は" },
          { kanji: "三名", reading: "さんめい" },
          { text: "で" },
          { kanji: "入", reading: "はい" },
          { text: "っています。" },
        ],
        translation: {
          ru: "Бронь в ресторане оформлена на троих человек.",
          uz: "Restorandagi band qilingan joy uch kishiga yozilgan.",
        },
        grammarPoint: {
          ru: "В сфере услуг людей считают через вежливое <ruby>名<rt>めい</rt></ruby>. Фраза 予約が<ruby>入<rt>はい</rt></ruby>っている означает, что бронь надежно зафиксирована в системе.",
          uz: "Xizmat ko'rsatish sohasida odamlar 人 emas, hurmat bilan <ruby>名<rt>めい</rt></ruby> orqali sanaladi. 予約が<ruby>入<rt>はい</rt></ruby>っている iborasi joy tizimda muvaffaqiyatli band qilinganini anglatadi.",
        },
      },
    },
    {
      char: "上",
      onyomi: "ジョウ",
      kunyomi: "うえ, あ.がる",
      meanings: {
        ru: "верх, подниматься",
        uz: "yuqori, ko'tarilmoq",
      },
      words: [
        {
          kanji: "上",
          kana: "うえ",
          mean_ru: "наверху",
          mean_uz: "tepada",
        },
        {
          kanji: "上着",
          kana: "うわぎ",
          mean_ru: "верхняя одежда",
          mean_uz: "ustki kiyim",
        },
        {
          kanji: "上手",
          kana: "じょうず",
          mean_ru: "умелый",
          mean_uz: "mohir",
        },
      ],
      sentence: {
        jp: "荷物は上の棚に置いてください。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "は" },
          { kanji: "上", reading: "うえ" },
          { text: "の" },
          { kanji: "棚", reading: "たな" },
          { text: "に" },
          { kanji: "置", reading: "お" },
          { text: "いてください。" },
        ],
        translation: {
          ru: "Пожалуйста, положите вещи на верхнюю полку.",
          uz: "Iltimos, yukingizni tepadagi javonga qo'ying.",
        },
        grammarPoint: {
          ru: "Конструкция 〜に<ruby>置<rt>お</rt></ruby>いてください отлично подходит для инструкций. Так просят стюардессы и проводники, указывая, куда убрать сумку.",
          uz: "〜に<ruby>置<rt>お</rt></ruby>いてください qurilmasi yo'riqnomalar uchun juda mos. Poyezd yoki samolyotda yukni javonga qo'yishni shunday so'rashadi.",
        },
      },
    },
    {
      char: "下",
      onyomi: "カ, ゲ",
      kunyomi: "した, さ.がる",
      meanings: {
        ru: "низ, спускаться",
        uz: "past, tushmoq",
      },
      words: [
        {
          kanji: "下",
          kana: "した",
          mean_ru: "внизу",
          mean_uz: "pastda",
        },
        {
          kanji: "地下鉄",
          kana: "ちかてつ",
          mean_ru: "метро",
          mean_uz: "metro",
        },
        {
          kanji: "下がる",
          kana: "さがる",
          mean_ru: "опускаться, падать",
          mean_uz: "tushmoq, pasaymoq",
        },
      ],
      sentence: {
        jp: "薬を飲んで、熱が下がりました。",
        rubyData: [
          { kanji: "薬", reading: "くすり" },
          { text: "を" },
          { kanji: "飲", reading: "の" },
          { text: "んで、" },
          { kanji: "熱", reading: "ねつ" },
          { text: "が" },
          { kanji: "下", reading: "さ" },
          { text: "がりました。" },
        ],
        translation: {
          ru: "Я выпил лекарство, и температура спала.",
          uz: "Dori ichgandim, isitmam tushdi.",
        },
        grammarPoint: {
          ru: "Глагол <ruby>下<rt>さ</rt></ruby>がる отлично описывает то, что снижается само: температура, цены. Форма 〜て показывает последовательность действий.",
          uz: "<ruby>下<rt>さ</rt></ruby>がる fe'li o'z-o'zidan pasayadigan narsalarga nisbatan ishlatiladi: isitma, narxlar. 〜て shakli ketma-ketlikni bildiradi.",
        },
      },
    },
    {
      char: "中",
      onyomi: "チュウ, ジュウ",
      kunyomi: "なか",
      meanings: {
        ru: "внутри, середина",
        uz: "ichida, o'rta",
      },
      words: [
        {
          kanji: "中",
          kana: "なか",
          mean_ru: "внутри",
          mean_uz: "ichida",
        },
        {
          kanji: "一日中",
          kana: "いちにちじゅう",
          mean_ru: "весь день",
          mean_uz: "kun bo'yi",
        },
        {
          kanji: "会議中",
          kana: "かいぎちゅう",
          mean_ru: "на собрании",
          mean_uz: "majlisda",
        },
      ],
      sentence: {
        jp: "田中さんは今、会議中なので後で電話します。",
        rubyData: [
          { kanji: "田中", reading: "たなか" },
          { text: "さんは" },
          { kanji: "今", reading: "いま" },
          { text: "、" },
          { kanji: "会議中", reading: "かいぎちゅう" },
          { text: "なので" },
          { kanji: "後", reading: "あと" },
          { text: "で" },
          { kanji: "電話", reading: "でんわ" },
          { text: "します。" },
        ],
        translation: {
          ru: "Танака-сан сейчас на собрании, поэтому я перезвоню позже.",
          uz: "Tanaka san hozir majlisda, shuning uchun keyinroq qo'ng'iroq qilaman.",
        },
        grammarPoint: {
          ru: "Суффикс 〜中 (читается как ちゅう) превращает слово в активный процесс «прямо сейчас». Незаменимо в офисе для объяснения занятости.",
          uz: "〜中 (chuu deb o'qiladi) qo'shimchasi otlarga qo'shilib, jarayon ayni paytda davom etayotganini bildiradi. Ofisda ishlatish uchun ideal.",
        },
      },
    },
    {
      char: "九",
      onyomi: "キュウ, ク",
      kunyomi: "ここの.つ",
      meanings: {
        ru: "девять",
        uz: "to'qqiz",
      },
      words: [
        {
          kanji: "九つ",
          kana: "ここのつ",
          mean_ru: "девять штук",
          mean_uz: "to'qqizta",
        },
        {
          kanji: "九時",
          kana: "くじ",
          mean_ru: "девять часов",
          mean_uz: "soat to'qqiz",
        },
        {
          kanji: "九月",
          kana: "くがつ",
          mean_ru: "сентябрь",
          mean_uz: "sentyabr",
        },
      ],
      sentence: {
        jp: "このスーパーは夜の九時まで開いています。",
        rubyData: [
          { text: "このスーパーは" },
          { kanji: "夜", reading: "よる" },
          { text: "の" },
          { kanji: "九時", reading: "くじ" },
          { text: "まで" },
          { kanji: "開", reading: "あ" },
          { text: "いています。" },
        ],
        translation: {
          ru: "Этот супермаркет открыт до девяти вечера.",
          uz: "Bu supermarket kechqurun soat to'qqizgacha ochiq.",
        },
        grammarPoint: {
          ru: "Частица まで (до) показывает крайний срок. А форма <ruby>開<rt>あ</rt></ruby>いている описывает состояние — магазин прямо сейчас открыт и принимает покупателей.",
          uz: "まで (gacha) yuklamasi oxirgi muddatni ko'rsatadi. <ruby>開<rt>あ</rt></ruby>いている shakli esa do'kon ayni paytda ochiq holatda ekanini bildiradi.",
        },
      },
    },
    {
      char: "二",
      onyomi: "ニ",
      kunyomi: "ふた, ふた.つ",
      meanings: {
        ru: "два",
        uz: "ikki",
      },
      words: [
        {
          kanji: "二つ",
          kana: "ふたつ",
          mean_ru: "две штуки",
          mean_uz: "ikkita",
        },
        {
          kanji: "二人",
          kana: "ふたり",
          mean_ru: "два человека",
          mean_uz: "ikki kishi",
        },
        {
          kanji: "二日",
          kana: "ふつか",
          mean_ru: "два дня",
          mean_uz: "ikki kun",
        },
      ],
      sentence: {
        jp: "これ、二人で半分ずつ分けましょう。",
        rubyData: [
          { text: "これ、" },
          { kanji: "二人", reading: "ふたり" },
          { text: "で" },
          { kanji: "半分", reading: "はんぶん" },
          { text: "ずつ" },
          { kanji: "分", reading: "わ" },
          { text: "けましょう。" },
        ],
        translation: {
          ru: "Давай разделим это поровну на двоих.",
          uz: "Keling, buni ikkimiz teng bo'lishib olamiz.",
        },
        grammarPoint: {
          ru: "Счётное слово + で означает, в каком составе выполняется действие. <ruby>二人<rt>ふたり</rt></ruby>で = «вдвоём». А ずつ помогает делить вещи честно и поровну.",
          uz: "Sanoq so'zi + で harakat nechta odam bilan bajarilishini bildiradi. <ruby>二人<rt>ふたり</rt></ruby>で = «ikkalamiz». ずつ esa narsalarni teng bo'lishishda kerak.",
        },
      },
    },
    {
      char: "五",
      onyomi: "ゴ",
      kunyomi: "いつ, いつ.つ",
      meanings: {
        ru: "пять",
        uz: "besh",
      },
      words: [
        {
          kanji: "五つ",
          kana: "いつつ",
          mean_ru: "пять штук",
          mean_uz: "beshta",
        },
        {
          kanji: "五分",
          kana: "ごふん",
          mean_ru: "пять минут",
          mean_uz: "besh daqiqa",
        },
        {
          kanji: "五日",
          kana: "いつか",
          mean_ru: "пять дней",
          mean_uz: "besh kun",
        },
      ],
      sentence: {
        jp: "あと五分だけ待ってくれませんか。",
        rubyData: [
          { text: "あと" },
          { kanji: "五分", reading: "ごふん" },
          { text: "だけ" },
          { kanji: "待", reading: "ま" },
          { text: "ってくれませんか。" },
        ],
        translation: {
          ru: "Можешь подождать ещё буквально пять минут?",
          uz: "Yana besh daqiqagina kutib tura olmaysanmi?",
        },
        grammarPoint: {
          ru: "あと + время — идеальная формула для обратного отсчета при опоздании. Частица だけ (только) добавляет молящий оттенок: «ну пожалуйста».",
          uz: "あと + vaqt — kechikayotganda vaqtni ortga sanash uchun eng zo'r qolip. だけ (faqatgina) so'zi «iltimos, shunchaki» degan ohangni beradi.",
        },
      },
    },
    {
      char: "人",
      onyomi: "ジン, ニン",
      kunyomi: "ひと",
      meanings: {
        ru: "человек",
        uz: "odam",
      },
      words: [
        {
          kanji: "人",
          kana: "ひと",
          mean_ru: "человек",
          mean_uz: "odam",
        },
        {
          kanji: "外国人",
          kana: "がいこくじん",
          mean_ru: "иностранец",
          mean_uz: "chet ellik",
        },
        {
          kanji: "大人",
          kana: "おとな",
          mean_ru: "взрослый",
          mean_uz: "kattalar",
        },
      ],
      sentence: {
        jp: "あのメガネをかけた人は誰ですか。",
        rubyData: [
          { text: "あのメガネをかけた" },
          { kanji: "人", reading: "ひと" },
          { text: "は" },
          { kanji: "誰", reading: "だれ" },
          { text: "ですか。" },
        ],
        translation: {
          ru: "Кто тот человек в очках?",
          uz: "Anavi ko'zoynak taqqan odam kim?",
        },
        grammarPoint: {
          ru: "В японском описание ставится строго перед существительным. <ruby>メガネをかけた人<rt>めがねをかけたひと</rt></ruby> — буквально «очки-надевший-человек». Удобно указывать на кого-то в толпе.",
          uz: "Yapon tilida ta'rif har doim otdan oldin keladi. <ruby>メガネをかけた人<rt>めがねをかけたひと</rt></ruby> — so'zma-so'z «ko'zoynak taqqan odam». Olomondan kimnidir ko'rsatish uchun kerak.",
        },
      },
    },
    {
      char: "今",
      onyomi: "コン, キン",
      kunyomi: "いま",
      meanings: {
        ru: "сейчас",
        uz: "hozir",
      },
      words: [
        {
          kanji: "今",
          kana: "いま",
          mean_ru: "сейчас",
          mean_uz: "hozir",
        },
        {
          kanji: "今日",
          kana: "きょう",
          mean_ru: "сегодня",
          mean_uz: "bugun",
        },
        {
          kanji: "今週",
          kana: "こんしゅう",
          mean_ru: "эта неделя",
          mean_uz: "bu hafta",
        },
      ],
      sentence: {
        jp: "今からそっちに向かいますね。",
        rubyData: [
          { kanji: "今", reading: "いま" },
          { text: "からそっちに" },
          { kanji: "向", reading: "む" },
          { text: "かいますね。" },
        ],
        translation: {
          ru: "Прямо сейчас выхожу (направляюсь) к тебе.",
          uz: "Hozir sening oldingga qarab yo'l olyapman.",
        },
        grammarPoint: {
          ru: "<ruby>今<rt>いま</rt></ruby>から значит «с этого момента». Золотая фраза для переписок в LINE, чтобы дать знать друзьям, что вы уже вышли на встречу.",
          uz: "<ruby>今<rt>いま</rt></ruby>から «ayni hozirdan» degani. Do'stlar bilan uchrashishga uydan chiqqaningizni messenjerda yozish uchun eng zo'r ibora.",
        },
      },
    },
    {
      char: "休",
      onyomi: "キュウ",
      kunyomi: "やす.む",
      meanings: {
        ru: "отдыхать",
        uz: "dam olmoq",
      },
      words: [
        {
          kanji: "休み",
          kana: "やすみ",
          mean_ru: "выходной, отдых",
          mean_uz: "dam olish kuni",
        },
        {
          kanji: "休む",
          kana: "やすむ",
          mean_ru: "отдыхать, брать отгул",
          mean_uz: "dam olmoq, ishga bormaslik",
        },
        {
          kanji: "昼休み",
          kana: "ひるやすみ",
          mean_ru: "обеденный перерыв",
          mean_uz: "tushlik tanaffusi",
        },
      ],
      sentence: {
        jp: "体調が悪いので、今日は仕事を休みます。",
        rubyData: [
          { kanji: "体調", reading: "たいちょう" },
          { text: "が" },
          { kanji: "悪", reading: "わる" },
          { text: "いので、" },
          { kanji: "今日", reading: "きょう" },
          { text: "は" },
          { kanji: "仕事", reading: "しごと" },
          { text: "を" },
          { kanji: "休", reading: "やす" },
          { text: "みます。" },
        ],
        translation: {
          ru: "Я плохо себя чувствую, поэтому сегодня беру отгул на работе.",
          uz: "Tobim yo'q, shuning uchun bugun ishga chiqmayman.",
        },
        grammarPoint: {
          ru: "Когда вы отпрашиваетесь у японского начальника, используйте ので, а не から. Это показывает объективность вашей причины и звучит профессионально.",
          uz: "Yapon boshlig'idan ruxsat so'raganda から emas, ので ishlatish kerak. Bu vaziyatni obyektiv tushuntiradi va rasmiyroq eshitiladi.",
        },
      },
    },
    {
      char: "何",
      onyomi: "カ",
      kunyomi: "なに, なん",
      meanings: {
        ru: "что",
        uz: "nima",
      },
      words: [
        {
          kanji: "何",
          kana: "なに",
          mean_ru: "что",
          mean_uz: "nima",
        },
        {
          kanji: "何か",
          kana: "なにか",
          mean_ru: "что-то",
          mean_uz: "biror nima",
        },
        {
          kanji: "何時",
          kana: "なんじ",
          mean_ru: "сколько времени",
          mean_uz: "soat necha",
        },
      ],
      sentence: {
        jp: "お腹が空いたので、何か食べに行きませんか。",
        rubyData: [
          { text: "お" },
          { kanji: "腹", reading: "なか" },
          { text: "が" },
          { kanji: "空", reading: "す" },
          { text: "いたので、" },
          { kanji: "何", reading: "なに" },
          { text: "か" },
          { kanji: "食", reading: "た" },
          { text: "べに" },
          { kanji: "行", reading: "い" },
          { text: "きませんか。" },
        ],
        translation: {
          ru: "Я проголодался, может, сходим что-нибудь перекусить?",
          uz: "Qornim ochdi, biror narsa yegani bormaymizmi?",
        },
        grammarPoint: {
          ru: "〜に行きませんか — отличный шаблон для приглашения друзей. Первая часть (食べに) указывает цель: «не пойдём ли с целью поесть?». Мягко и без давления.",
          uz: "〜に行きませんか — do'stlarni taklif qilish uchun ajoyib qolip. Birinchi qism (食べに) maqsadni bildiradi: «yegani bormaymizmi?». Suhbatdoshni siqib qo'ymaydigan usul.",
        },
      },
    },
    {
      char: "先",
      onyomi: "セン",
      kunyomi: "さき",
      meanings: {
        ru: "впереди, прошлый",
        uz: "oldingi, avvalgi",
      },
      words: [
        {
          kanji: "先生",
          kana: "せんせい",
          mean_ru: "учитель",
          mean_uz: "o'qituvchi",
        },
        {
          kanji: "先週",
          kana: "せんしゅう",
          mean_ru: "прошлая неделя",
          mean_uz: "o'tgan hafta",
        },
        {
          kanji: "先に",
          kana: "さきに",
          mean_ru: "сначала, вперед",
          mean_uz: "oldin, birinchi bo'lib",
        },
      ],
      sentence: {
        jp: "お先に失礼します、お疲れ様でした。",
        rubyData: [
          { text: "お" },
          { kanji: "先", reading: "さき" },
          { text: "に" },
          { kanji: "失礼", reading: "しつれい" },
          { text: "します、お" },
          { kanji: "疲", reading: "つか" },
          { text: "れ" },
          { kanji: "様", reading: "さま" },
          { text: "でした。" },
        ],
        translation: {
          ru: "Я ухожу первым, всем спасибо за работу.",
          uz: "Men hammadan oldin ketyapman, ishingizda charchamang.",
        },
        grammarPoint: {
          ru: "Обязательная корпоративная мантра. Если вы уходите с работы раньше других, вы просто обязаны сказать эту фразу, извиняясь за уход.",
          uz: "Ish joyidagi majburiy ibora. Agar boshqalardan oldinroq ketsangiz, albatta shu gapni aytib uzr so'rashingiz kerak.",
        },
      },
    },
    {
      char: "入",
      onyomi: "ニュウ",
      kunyomi: "はい.る, い.れる",
      meanings: {
        ru: "входить, класть внутрь",
        uz: "kirmoq, solmoq",
      },
      words: [
        {
          kanji: "入る",
          kana: "はいる",
          mean_ru: "входить",
          mean_uz: "kirmoq",
        },
        {
          kanji: "入れる",
          kana: "いれる",
          mean_ru: "класть внутрь",
          mean_uz: "solmoq, kiritmoq",
        },
        {
          kanji: "入口",
          kana: "いりぐち",
          mean_ru: "вход",
          mean_uz: "kirish joyi",
        },
      ],
      sentence: {
        jp: "お弁当は袋に入れますか。",
        rubyData: [
          { text: "お" },
          { kanji: "弁当", reading: "べんとう" },
          { text: "は" },
          { kanji: "袋", reading: "ふくろ" },
          { text: "に" },
          { kanji: "入", reading: "い" },
          { text: "れますか。" },
        ],
        translation: {
          ru: "Вам положить бэнто в пакет?",
          uz: "Bentonini paketga solaymi?",
        },
        grammarPoint: {
          ru: "Каждый раз на кассе в Японии вам зададут этот вопрос. <ruby>入<rt>い</rt></ruby>れる — это переходный глагол, означающий, что человек сам кладет предмет куда-то.",
          uz: "Yaponiyada kassada har safar sizga shu savolni berishadi. <ruby>入<rt>い</rt></ruby>れる — narsani biror joyga o'z qo'li bilan solishni anglatuvchi o'timli fe'l.",
        },
      },
    },
    {
      char: "八",
      onyomi: "ハチ",
      kunyomi: "や, や.つ, やっ.つ",
      meanings: {
        ru: "восемь",
        uz: "sakkiz",
      },
      words: [
        {
          kanji: "八つ",
          kana: "やっつ",
          mean_ru: "восемь штук",
          mean_uz: "sakkizta",
        },
        {
          kanji: "八時",
          kana: "はちじ",
          mean_ru: "восемь часов",
          mean_uz: "soat sakkiz",
        },
        {
          kanji: "八日",
          kana: "ようか",
          mean_ru: "восьмое число",
          mean_uz: "sakkizinchi sana",
        },
      ],
      sentence: {
        jp: "明日の夜八時に予約したいんですが。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "の" },
          { kanji: "夜", reading: "よる" },
          { kanji: "八時", reading: "はちじ" },
          { text: "に" },
          { kanji: "予約", reading: "よやく" },
          { text: "したいんですが。" },
        ],
        translation: {
          ru: "Я бы хотел забронировать столик на завтра на восемь вечера.",
          uz: "Ertaga kechki soat sakkizga joy band qilmoqchi edim.",
        },
        grammarPoint: {
          ru: "〜たいんですが — идеальный способ выразить просьбу. Окончание 〜が (но) смягчает фразу: «получится ли?». Так звучит естественная речь по телефону.",
          uz: "〜たいんですが — iltimosni bildirishning ajoyib usuli. 〜が oxiri iborani yumshatadi: «iloji bormi?». Restoranga telefon qilganda juda tabiiy eshitiladi.",
        },
      },
    },
    {
      char: "六",
      onyomi: "ロク",
      kunyomi: "む, む.つ, むっ.つ",
      meanings: {
        ru: "шесть",
        uz: "olti",
      },
      words: [
        {
          kanji: "六つ",
          kana: "むっつ",
          mean_ru: "шесть штук",
          mean_uz: "oltita",
        },
        {
          kanji: "六時",
          kana: "ろくじ",
          mean_ru: "шесть часов",
          mean_uz: "soat olti",
        },
        {
          kanji: "六日",
          kana: "むいか",
          mean_ru: "шестое число",
          mean_uz: "oltinchi sana",
        },
      ],
      sentence: {
        jp: "今日の会議は六時に終わります。",
        rubyData: [
          { kanji: "今日", reading: "きょう" },
          { text: "の" },
          { kanji: "会議", reading: "かいぎ" },
          { text: "は" },
          { kanji: "六時", reading: "ろくじ" },
          { text: "に" },
          { kanji: "終", reading: "お" },
          { text: "わります。" },
        ],
        translation: {
          ru: "Сегодняшнее совещание закончится ровно в шесть.",
          uz: "Bugungi majlis soat oltida tugaydi.",
        },
        grammarPoint: {
          ru: "〜に終わる описывает, во сколько именно завершится событие. Очень полезно для уточнения рабочих графиков и планов на вечер.",
          uz: "〜に終わる biror hodisa aynan soat nechada tugashini bildiradi. Ish jadvali va kechki rejalarni aniqlashtirish uchun juda kerak.",
        },
      },
    },
    {
      char: "円",
      onyomi: "エン",
      kunyomi: "まる.い",
      meanings: {
        ru: "иена, круглый",
        uz: "iyen, yumaloq",
      },
      words: [
        {
          kanji: "円",
          kana: "えん",
          mean_ru: "иена (валюта)",
          mean_uz: "iyen (pul)",
        },
        {
          kanji: "百円",
          kana: "ひゃくえん",
          mean_ru: "сто иен",
          mean_uz: "yuz iyen",
        },
        {
          kanji: "一万円",
          kana: "いちまんえん",
          mean_ru: "десять тысяч иен",
          mean_uz: "o'n ming iyen",
        },
      ],
      sentence: {
        jp: "お会計は全部で三千円になります。",
        rubyData: [
          { text: "お" },
          { kanji: "会計", reading: "かいけい" },
          { text: "は" },
          { kanji: "全部", reading: "ぜんぶ" },
          { text: "で" },
          { kanji: "三千円", reading: "さんぜんえん" },
          { text: "になります。" },
        ],
        translation: {
          ru: "Общий счёт составит три тысячи иен.",
          uz: "Jami hisobingiz uch ming iyen bo'ladi.",
        },
        grammarPoint: {
          ru: "〜になります — это сервисный язык (байт-кэйго). Кассиры всегда говорят так, озвучивая сумму. <ruby>全部<rt>ぜんぶ</rt></ruby>で = «итого / за всё».",
          uz: "〜になります — xizmat ko'rsatish tili. Kassirlar mijozlarga pulni aytganda doim shunday deyishadi. <ruby>全部<rt>ぜんぶ</rt></ruby>で = «hammasi bo'lib».",
        },
      },
    },
    {
      char: "出",
      onyomi: "シュツ",
      kunyomi: "で.る, だ.す",
      meanings: {
        ru: "выходить, доставать",
        uz: "chiqmoq, chiqarmoq",
      },
      words: [
        {
          kanji: "出る",
          kana: "でる",
          mean_ru: "выходить",
          mean_uz: "chiqmoq",
        },
        {
          kanji: "出す",
          kana: "だす",
          mean_ru: "доставать, выдавать",
          mean_uz: "chiqarmoq, bermoq",
        },
        {
          kanji: "出口",
          kana: "でぐち",
          mean_ru: "выход",
          mean_uz: "chiqish joyi",
        },
      ],
      sentence: {
        jp: "すみません、出ます！通してください。",
        rubyData: [
          { text: "すみません、" },
          { kanji: "出", reading: "で" },
          { text: "ます！" },
          { kanji: "通", reading: "とお" },
          { text: "してください。" },
        ],
        translation: {
          ru: "Извините, я выхожу! Пропустите, пожалуйста.",
          uz: "Kechirasiz, men chiqaman! O'tkazib yuboring.",
        },
        grammarPoint: {
          ru: "Громкое «<ruby>出<rt>で</rt></ruby>ます!» (Я выхожу!) — это чёткий сигнал в переполненном японском поезде, чтобы люди освободили вам дорогу.",
          uz: "Baland ovozda aytilgan «<ruby>出<rt>で</rt></ruby>ます!» (Men chiqaman!) — tiqilinch yapon poyezdida odamlar sizga yo'l bo'shatishi uchun aniq ishoradir.",
        },
      },
    },
    {
      char: "分",
      onyomi: "ブン, フン, プン",
      kunyomi: "わ.かる, わ.ける",
      meanings: {
        ru: "минута, понимать",
        uz: "daqiqa, tushunmoq",
      },
      words: [
        {
          kanji: "分かる",
          kana: "わかる",
          mean_ru: "понимать",
          mean_uz: "tushunmoq",
        },
        {
          kanji: "五分",
          kana: "ごふん",
          mean_ru: "пять минут",
          mean_uz: "besh daqiqa",
        },
        {
          kanji: "半分",
          kana: "はんぶん",
          mean_ru: "половина",
          mean_uz: "yarmi",
        },
      ],
      sentence: {
        jp: "話の意味がよく分からないので、教えてください。",
        rubyData: [
          { kanji: "話", reading: "はなし" },
          { text: "の" },
          { kanji: "意味", reading: "いみ" },
          { text: "がよく" },
          { kanji: "分", reading: "わ" },
          { text: "からないので、" },
          { kanji: "教", reading: "おし" },
          { text: "えてください。" },
        ],
        translation: {
          ru: "Извините, я не совсем понимаю смысл, можете объяснить?",
          uz: "Gapingizning ma'nosini unchalik tushunmayapman, tushuntirib bering.",
        },
        grammarPoint: {
          ru: "よく分からない — мягкий способ сказать «я не понимаю». Слово よく (хорошо) смягчает фразу: «не до конца понимаю», спасая от резкости.",
          uz: "よく分からない — yaponlar keskin rad etishni xohlamagani uchun «yaxshi tushunmayapman» deb, vaziyatni yumshatib aytish usuli.",
        },
      },
    },
    {
      char: "前",
      onyomi: "ゼン",
      kunyomi: "まえ",
      meanings: {
        ru: "перед, до",
        uz: "oldida, oldin",
      },
      words: [
        {
          kanji: "前",
          kana: "まえ",
          mean_ru: "спереди, до",
          mean_uz: "oldinda, oldin",
        },
        {
          kanji: "名前",
          kana: "なまえ",
          mean_ru: "имя",
          mean_uz: "ism",
        },
        {
          kanji: "午前",
          kana: "ごぜん",
          mean_ru: "до полудня (AM)",
          mean_uz: "tushgacha bo'lgan vaqt",
        },
      ],
      sentence: {
        jp: "駅の前のコンビニで待ち合わせしましょう。",
        rubyData: [
          { kanji: "駅", reading: "えき" },
          { text: "の" },
          { kanji: "前", reading: "まえ" },
          { text: "のコンビニで" },
          { kanji: "待", reading: "ま" },
          { text: "ち" },
          { kanji: "合", reading: "あ" },
          { text: "わせしましょう。" },
        ],
        translation: {
          ru: "Давай встретимся в комбини перед станцией.",
          uz: "Bekat oldidagi do'konda ko'rishamiz.",
        },
        grammarPoint: {
          ru: "<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせ — это именно «договорная встреча», когда люди сходятся в одной точке. Гораздо точнее для назначения места, чем просто 会う.",
          uz: "<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせ — bu aynan «kelishilgan uchrashuv», ya'ni odamlar bir joyga to'planishi. Shunchaki 会う degandan ko'ra aniqroq mo'ljal.",
        },
      },
    },
    {
      char: "北",
      onyomi: "ホク",
      kunyomi: "きた",
      meanings: {
        ru: "север",
        uz: "shimol",
      },
      words: [
        {
          kanji: "北",
          kana: "きた",
          mean_ru: "север",
          mean_uz: "shimol",
        },
        {
          kanji: "北口",
          kana: "きたぐち",
          mean_ru: "северный выход",
          mean_uz: "shimoliy chiqish joyi",
        },
        {
          kanji: "北海道",
          kana: "ほっかいどう",
          mean_ru: "Хоккайдо",
          mean_uz: "Xokkaydo",
        },
      ],
      sentence: {
        jp: "改札を出て、北口に向かってください。",
        rubyData: [
          { kanji: "改札", reading: "かいさつ" },
          { text: "を" },
          { kanji: "出", reading: "で" },
          { text: "て、" },
          { kanji: "北口", reading: "きたぐち" },
          { text: "に" },
          { kanji: "向", reading: "む" },
          { text: "かってください。" },
        ],
        translation: {
          ru: "Выйдите через турникеты и направляйтесь к северному выходу.",
          uz: "Turniketlardan chiqib, shimoliy chiqish joyi tomonga yuring.",
        },
        grammarPoint: {
          ru: "В Японии на крупных станциях выходы обозначают сторонами света. Конструкция 〜に<ruby>向<rt>む</rt></ruby>かって (направляясь к) помогает объяснить дорогу.",
          uz: "Yaponiyaning yirik stansiyalarida chiqish joylari dunyo tomonlari bilan belgilanadi. 〜に<ruby>向<rt>む</rt></ruby>かって (tomonga yo'nalib) qurilmasi yo'lni tushuntirishga yordam beradi.",
        },
      },
    },
    {
      char: "十",
      onyomi: "ジュウ, ジッ",
      kunyomi: "とお",
      meanings: {
        ru: "десять",
        uz: "o'n",
      },
      words: [
        {
          kanji: "十",
          kana: "とお",
          mean_ru: "десять штук",
          mean_uz: "o'nta",
        },
        {
          kanji: "十分",
          kana: "じゅっぷん",
          mean_ru: "десять минут",
          mean_uz: "o'n daqiqa",
        },
        {
          kanji: "十分",
          kana: "じゅうぶん",
          mean_ru: "достаточно",
          mean_uz: "yetarli",
        },
      ],
      sentence: {
        jp: "駅から家まで歩いて十分かかります。",
        rubyData: [
          { kanji: "駅", reading: "えき" },
          { text: "から" },
          { kanji: "家", reading: "いえ" },
          { text: "まで" },
          { kanji: "歩", reading: "ある" },
          { text: "いて" },
          { kanji: "十分", reading: "じゅっぷん" },
          { text: "かかります。" },
        ],
        translation: {
          ru: "От станции до дома идти пешком 10 минут.",
          uz: "Bekatdan uyigacha piyoda 10 daqiqa vaqt ketadi.",
        },
        grammarPoint: {
          ru: "<ruby>歩<rt>ある</rt></ruby>いて (пешком) + время + かかる (требоваться). Классическая формула, чтобы описать дорогу при поиске жилья или объяснении маршрута.",
          uz: "<ruby>歩<rt>ある</rt></ruby>いて (piyoda) + vaqt + かかる (vaqt ketmoq). Uy yoki manzilni tushuntirishning klassik usuli.",
        },
      },
    },
    {
      char: "千",
      onyomi: "セン",
      kunyomi: "ち",
      meanings: {
        ru: "тысяча",
        uz: "ming",
      },
      words: [
        {
          kanji: "千",
          kana: "せん",
          mean_ru: "тысяча",
          mean_uz: "ming",
        },
        {
          kanji: "三千円",
          kana: "さんぜんえん",
          mean_ru: "три тысячи иен",
          mean_uz: "uch ming iyen",
        },
        {
          kanji: "千葉",
          kana: "ちば",
          mean_ru: "Тиба (префектура)",
          mean_uz: "Chiba",
        },
      ],
      sentence: {
        jp: "スイカに千円チャージしたいです。",
        rubyData: [
          { text: "スイカに" },
          { kanji: "千円", reading: "せんえん" },
          { text: "チャージしたいです。" },
        ],
        translation: {
          ru: "Я хочу закинуть тысячу иен на Суйку (проездной).",
          uz: "Suica kartamga ming iyen tashlamoqchiman.",
        },
        grammarPoint: {
          ru: "チャージする (от англ. charge) — так в Японии говорят про пополнение проездных карт (Suica) или баланса телефона. Жизненно необходимое слово.",
          uz: "チャージする (ingl. charge) — Yaponiyada yo'l chiptalari (Suica, Pasmo) balansini to'ldirishni shunday aytishadi. Juda kerakli so'z.",
        },
      },
    },
    {
      char: "午",
      onyomi: "ゴ",
      kunyomi: "",
      meanings: {
        ru: "полдень",
        uz: "tush",
      },
      words: [
        {
          kanji: "午前",
          kana: "ごぜん",
          mean_ru: "первая половина дня",
          mean_uz: "tushgacha bo'lgan vaqt",
        },
        {
          kanji: "午後",
          kana: "ごご",
          mean_ru: "вторая половина дня",
          mean_uz: "tushdan keyin",
        },
        {
          kanji: "正午",
          kana: "しょうご",
          mean_ru: "ровно полдень",
          mean_uz: "qoq tush",
        },
      ],
      sentence: {
        jp: "午後は雨が降るかもしれないので、傘を持っていきます。",
        rubyData: [
          { kanji: "午後", reading: "ごご" },
          { text: "は" },
          { kanji: "雨", reading: "あめ" },
          { text: "が" },
          { kanji: "降", reading: "ふ" },
          { text: "るかもしれないので、" },
          { kanji: "傘", reading: "かさ" },
          { text: "を" },
          { kanji: "持", reading: "も" },
          { text: "っていきます。" },
        ],
        translation: {
          ru: "Во второй половине дня, возможно, пойдет дождь, поэтому я возьму зонт.",
          uz: "Tushdan keyin yomg'ir yog'ishi mumkin, shuning uchun soyabon olib olaman.",
        },
        grammarPoint: {
          ru: "〜かもしれない — конструкция для выражения вероятности («может быть»). Японцы очень осторожны в прогнозах и почти не говорят со стопроцентной уверенностью.",
          uz: "〜かもしれない — ehtimollikni bildirish qurilmasi («balki»). Yaponlar bashorat qilishda ehtiyotkor bo'lib, yuz foiz ishonch bilan gapirishmaydi.",
        },
      },
    },
    {
      char: "半",
      onyomi: "ハン",
      kunyomi: "なか.ば",
      meanings: {
        ru: "половина",
        uz: "yarim",
      },
      words: [
        {
          kanji: "半分",
          kana: "はんぶん",
          mean_ru: "половина",
          mean_uz: "yarmi",
        },
        {
          kanji: "半年",
          kana: "はんとし",
          mean_ru: "полгода",
          mean_uz: "yarim yil",
        },
        {
          kanji: "三時半",
          kana: "さんじはん",
          mean_ru: "половина четвёртого",
          mean_uz: "soat uch yarim",
        },
      ],
      sentence: {
        jp: "ケーキを半分こにして食べましょう。",
        rubyData: [
          { text: "ケーキを" },
          { kanji: "半分", reading: "はんぶん" },
          { text: "こにして" },
          { kanji: "食", reading: "た" },
          { text: "べましょう。" },
        ],
        translation: {
          ru: "Давай разделим торт пополам и съедим.",
          uz: "Keling, tortni yarmidan bo'lib yeymiz.",
        },
        grammarPoint: {
          ru: "<ruby>半分<rt>はんぶん</rt></ruby>こ — супер-натуральное разговорное слово, означающее «поделить поровну/пополам». Японцы используют его постоянно.",
          uz: "<ruby>半分<rt>はんぶん</rt></ruby>こ — «teng ikkiga bo'lish» degan ma'noni beruvchi sof og'zaki so'z. Yaponlar ovqatni bo'lishganda buni doim ishlatishadi.",
        },
      },
    },
    {
      char: "南",
      onyomi: "ナン",
      kunyomi: "みなみ",
      meanings: {
        ru: "юг",
        uz: "janub",
      },
      words: [
        {
          kanji: "南",
          kana: "みなみ",
          mean_ru: "юг",
          mean_uz: "janub",
        },
        {
          kanji: "南口",
          kana: "みなみぐち",
          mean_ru: "южный выход",
          mean_uz: "janubiy chiqish joyi",
        },
        {
          kanji: "東南",
          kana: "とうなん",
          mean_ru: "юго-восток",
          mean_uz: "janubi-sharq",
        },
      ],
      sentence: {
        jp: "南口の改札を出たところで待っていますね。",
        rubyData: [
          { kanji: "南口", reading: "みなみぐち" },
          { text: "の" },
          { kanji: "改札", reading: "かいさつ" },
          { text: "を" },
          { kanji: "出", reading: "で" },
          { text: "たところで" },
          { kanji: "待", reading: "ま" },
          { text: "っていますね。" },
        ],
        translation: {
          ru: "Я буду ждать прямо там, где ты выйдешь из турникетов южного выхода.",
          uz: "Janubiy chiqishdagi turniketlardan o'tgan joyda kutyapman.",
        },
        grammarPoint: {
          ru: "〜たところで указывает на точное место, где действие только что завершилось. На огромных японских станциях так объясняют, где именно вы стоите.",
          uz: "〜たところで harakat tugagan aniq joyni bildiradi. Katta Yapon stansiyalarida odamlar bir-birini topishi uchun shunday joylashuvni aytishadi.",
        },
      },
    },
    {
      char: "友",
      onyomi: "ユウ",
      kunyomi: "とも",
      meanings: {
        ru: "друг",
        uz: "do'st",
      },
      words: [
        {
          kanji: "友達",
          kana: "ともだち",
          mean_ru: "друг",
          mean_uz: "do'st, o'rtoq",
        },
        {
          kanji: "友人",
          kana: "ゆうじん",
          mean_ru: "друг (формально)",
          mean_uz: "do'st (rasmiy)",
        },
        {
          kanji: "親友",
          kana: "しんゆう",
          mean_ru: "лучший друг",
          mean_uz: "eng yaqin do'st",
        },
      ],
      sentence: {
        jp: "週末は久しぶりに友達と飲みに行きます。",
        rubyData: [
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "は" },
          { kanji: "久", reading: "ひさ" },
          { text: "しぶりに" },
          { kanji: "友達", reading: "ともだち" },
          { text: "と" },
          { kanji: "飲", reading: "の" },
          { text: "みに" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "На выходных впервые за долгое время иду выпивать с друзьями.",
          uz: "Dam olish kunlari uzoq tanaffusdan keyin do'stlarim bilan ichgani boryapman.",
        },
        grammarPoint: {
          ru: "Цель + に行く (идти, чтобы сделать). <ruby>飲<rt>の</rt></ruby>みに行く — это практически культурный термин для похода в бар. А <ruby>久<rt>ひさ</rt></ruby>しぶりに («давненько») — фраза на каждый день.",
          uz: "Maqsad + に行く (qilishga bormoq). <ruby>飲<rt>の</rt></ruby>みに行く — bar yoki kafega dam olgani borish. <ruby>久<rt>ひさ</rt></ruby>しぶりに («uzoq vaqtdan keyin») esa sevimli iboradir.",
        },
      },
    },
    {
      char: "右",
      onyomi: "ウ, ユウ",
      kunyomi: "みぎ",
      meanings: {
        ru: "право",
        uz: "o'ng",
      },
      words: [
        {
          kanji: "右",
          kana: "みぎ",
          mean_ru: "право",
          mean_uz: "o'ng",
        },
        {
          kanji: "右手",
          kana: "みぎて",
          mean_ru: "правая рука",
          mean_uz: "o'ng qo'l",
        },
        {
          kanji: "左右",
          kana: "さゆう",
          mean_ru: "лево и право",
          mean_uz: "chap va o'ng",
        },
      ],
      sentence: {
        jp: "次の信号を右に曲がってください。",
        rubyData: [
          { kanji: "次", reading: "つぎ" },
          { text: "の" },
          { kanji: "信号", reading: "しんごう" },
          { text: "を" },
          { kanji: "右", reading: "みぎ" },
          { text: "に" },
          { kanji: "曲", reading: "ま" },
          { text: "がってください。" },
        ],
        translation: {
          ru: "На следующем светофоре поверните направо, пожалуйста.",
          uz: "Keyingi svetofordan o'ngga buriling, iltimos.",
        },
        grammarPoint: {
          ru: "Объект (светофор/угол) + を + направление (направо) + に<ruby>曲<rt>ま</rt></ruby>がる (повернуть). Эту фразу нужно выучить наизусть, чтобы объяснять таксистам дорогу.",
          uz: "Obyekt (svetofor/burchak) + を + yo'nalish (o'ngga) + に<ruby>曲<rt>ま</rt></ruby>がる (burilmoq). Taksistga yoki do'stga yo'l tushuntirish uchun eng kerakli qoida.",
        },
      },
    },
    {
      char: "名",
      onyomi: "メイ, ミョウ",
      kunyomi: "な",
      meanings: {
        ru: "имя, название",
        uz: "ism, nom",
      },
      words: [
        {
          kanji: "名前",
          kana: "なまえ",
          mean_ru: "имя",
          mean_uz: "ism",
        },
        {
          kanji: "有名",
          kana: "ゆうめい",
          mean_ru: "знаменитый",
          mean_uz: "mashhur",
        },
        {
          kanji: "名刺",
          kana: "めいし",
          mean_ru: "визитка",
          mean_uz: "vizitka",
        },
      ],
      sentence: {
        jp: "ここにローマ字で名前を書いてください。",
        rubyData: [
          { text: "ここにローマ" },
          { kanji: "字", reading: "じ" },
          { text: "で" },
          { kanji: "名前", reading: "なまえ" },
          { text: "を" },
          { kanji: "書", reading: "か" },
          { text: "いてください。" },
        ],
        translation: {
          ru: "Пожалуйста, напишите здесь своё имя латиницей.",
          uz: "Iltimos, bu yerga ismingizni lotin harflarida yozing.",
        },
        grammarPoint: {
          ru: "Частица で после слова <ruby>ローマ字<rt>ろーまじ</rt></ruby> (латиница) указывает на способ действия. Вы часто будете слышать это в банках или при оформлении документов.",
          uz: "<ruby>ローマ字<rt>ろーまじ</rt></ruby> (lotin alifbosi) so'zidan keyingi で yuklamasi harakat usulini ko'rsatadi. Buni banklarda yoki hujjatlarni to'ldirishda ko'p eshitasiz.",
        },
      },
    },
    {
      char: "四",
      onyomi: "シ",
      kunyomi: "よん, よっ.つ",
      meanings: {
        ru: "четыре",
        uz: "to'rt",
      },
      words: [
        {
          kanji: "四つ",
          kana: "よっつ",
          mean_ru: "четыре штуки",
          mean_uz: "to'rtta",
        },
        {
          kanji: "四月",
          kana: "しがつ",
          mean_ru: "апрель",
          mean_uz: "aprel",
        },
        {
          kanji: "四季",
          kana: "しき",
          mean_ru: "четыре сезона",
          mean_uz: "to'rt fasl",
        },
      ],
      sentence: {
        jp: "荷物が四つあるので、手伝ってくれませんか。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "が" },
          { kanji: "四", reading: "よっ" },
          { text: "つあるので、" },
          { kanji: "手伝", reading: "てつだ" },
          { text: "ってくれませんか。" },
        ],
        translation: {
          ru: "У меня тут четыре сумки (посылки), не могли бы вы мне помочь?",
          uz: "To'rtta yukim bor, menga yordam bera olmaysizmi?",
        },
        grammarPoint: {
          ru: "〜てくれませんか — дружелюбная, но уважительная просьба. Идеальна для общения с коллегами или персоналом, если вам нужно, чтобы они что-то сделали.",
          uz: "〜てくれませんか — do'stona, lekin hurmat ma'nosidagi iltimos. Ishxonadagi hamkasblar yoki xodimlardan yordam so'rash uchun eng zo'r forma.",
        },
      },
    },
    {
      char: "国",
      onyomi: "コク",
      kunyomi: "くに",
      meanings: {
        ru: "страна",
        uz: "davlat",
      },
      words: [
        {
          kanji: "国",
          kana: "くに",
          mean_ru: "страна, родина",
          mean_uz: "davlat, vatan",
        },
        {
          kanji: "外国",
          kana: "がいこく",
          mean_ru: "заграница",
          mean_uz: "chet el",
        },
        {
          kanji: "外国人",
          kana: "がいこくじん",
          mean_ru: "иностранец",
          mean_uz: "chet ellik",
        },
      ],
      sentence: {
        jp: "来年の夏、国へ帰るつもりです。",
        rubyData: [
          { kanji: "来年", reading: "らいねん" },
          { text: "の" },
          { kanji: "夏", reading: "なつ" },
          { text: "、" },
          { kanji: "国", reading: "くに" },
          { text: "へ" },
          { kanji: "帰", reading: "かえ" },
          { text: "るつもりです。" },
        ],
        translation: {
          ru: "Следующим летом я планирую съездить на родину.",
          uz: "Kelasi yozda vatanimga borib kelmoqchiman.",
        },
        grammarPoint: {
          ru: "Слово <ruby>国<rt>くに</rt></ruby> для иностранцев в Японии почти всегда означает «родина». А конструкция 〜つもりです выражает твёрдое личное намерение, ваши чёткие планы.",
          uz: "Yaponiyadagi chet elliklar uchun <ruby>国<rt>くに</rt></ruby> so'zi ko'pincha «vatan» degan ma'noni anglatadi. 〜つもりです qurilmasi esa qat'iy shaxsiy niyatni bildiradi.",
        },
      },
    },
    {
      char: "土",
      onyomi: "ド, ト",
      kunyomi: "つち",
      meanings: {
        ru: "земля, суббота",
        uz: "yer, shanba",
      },
      words: [
        {
          kanji: "土曜日",
          kana: "どようび",
          mean_ru: "суббота",
          mean_uz: "shanba",
        },
        {
          kanji: "土地",
          kana: "とち",
          mean_ru: "земля, участок",
          mean_uz: "yer, maydon",
        },
        {
          kanji: "土日",
          kana: "どにち",
          mean_ru: "выходные (сб-вс)",
          mean_uz: "shanba-yakshanba",
        },
      ],
      sentence: {
        jp: "今週の土日はどちらもバイトが入っています。",
        rubyData: [
          { kanji: "今週", reading: "こんしゅう" },
          { text: "の" },
          { kanji: "土日", reading: "どにち" },
          { text: "はどちらもバイトが" },
          { kanji: "入", reading: "はい" },
          { text: "っています。" },
        ],
        translation: {
          ru: "В эти выходные (субботу и воскресенье) у меня стоят смены на подработке.",
          uz: "Bu haftaning shanba va yakshanba kunlarida arbaytim (smenam) bor.",
        },
        grammarPoint: {
          ru: "Слово <ruby>土日<rt>どにち</rt></ruby> используется гораздо чаще, чем длинное 週末 (выходные). А выражение バイトが<ruby>入<rt>はい</rt></ruby>っている означает «в расписание поставлена смена».",
          uz: "<ruby>土日<rt>どにち</rt></ruby> so'zi dam olish kunlarini aytish uchun keng qo'llaniladi. バイトが<ruby>入<rt>はい</rt></ruby>っている ifodasi esa jadval bo'yicha «ish smenam bor» degani.",
        },
      },
    },
    {
      char: "外",
      onyomi: "ガイ, ゲ",
      kunyomi: "そと",
      meanings: {
        ru: "снаружи, вне",
        uz: "tashqari, chet",
      },
      words: [
        {
          kanji: "外",
          kana: "そと",
          mean_ru: "снаружи, улица",
          mean_uz: "tashqari, ko'cha",
        },
        {
          kanji: "外国人",
          kana: "がいこくじん",
          mean_ru: "иностранец",
          mean_uz: "chet ellik",
        },
        {
          kanji: "外食",
          kana: "がいしょく",
          mean_ru: "еда вне дома",
          mean_uz: "ko'chada ovqatlanish",
        },
      ],
      sentence: {
        jp: "今日は疲れたから、夕食は外食にしよう。",
        rubyData: [
          { kanji: "今日", reading: "きょう" },
          { text: "は" },
          { kanji: "疲", reading: "つか" },
          { text: "れたから、" },
          { kanji: "夕食", reading: "ゆうしょく" },
          { text: "は" },
          { kanji: "外食", reading: "がいしょく" },
          { text: "にしよう。" },
        ],
        translation: {
          ru: "Я сегодня устал, так что давай поедим где-нибудь в кафе.",
          uz: "Bugun judayam charchadim, kechki ovqatni ko'chada yey qolaylik.",
        },
        grammarPoint: {
          ru: "Существительное + にしよう — простой способ принять решение: «давай остановимся на этом варианте». <ruby>外食<rt>がいしょく</rt></ruby> — поход в ресторан вместо готовки дома.",
          uz: "Ot + にしよう — biror qaror qabul qilib, tanlovni aytishning eng oson yo'li: «kela qol shunday qilamiz». <ruby>外食<rt>がいしょく</rt></ruby> — uyda emas, kafe-restoranda yeyish.",
        },
      },
    },
    {
      char: "大",
      onyomi: "ダイ, タイ",
      kunyomi: "おお.きい",
      meanings: {
        ru: "большой",
        uz: "katta",
      },
      words: [
        {
          kanji: "大きい",
          kana: "おおきい",
          mean_ru: "большой",
          mean_uz: "katta",
        },
        {
          kanji: "大学",
          kana: "だいがく",
          mean_ru: "университет",
          mean_uz: "universitet",
        },
        {
          kanji: "大丈夫",
          kana: "だいじょうぶ",
          mean_ru: "все в порядке",
          mean_uz: "hammasi joyida",
        },
      ],
      sentence: {
        jp: "荷物が大きすぎるんですが、どうすればいいですか。",
        rubyData: [
          { kanji: "荷物", reading: "にもつ" },
          { text: "が" },
          { kanji: "大", reading: "おお" },
          { text: "きすぎるんですが、どうすればいいですか。" },
        ],
        translation: {
          ru: "Мой багаж слишком большой, что мне делать?",
          uz: "Yukim juda katta, nima qilsam ekan?",
        },
        grammarPoint: {
          ru: "Конструкция 〜すぎる значит «слишком» (перебор). А фраза どうすればいいですか — спасательный круг в Японии, если вы растерялись: на почте или вокзале.",
          uz: "〜すぎる qurilmasi «juda, haddan tashqari» degani. どうすればいいですか iborasi esa Yaponiyada pochta, vokzal yoki meriyada nima qilishni bilmay qolsangiz, qutqaruv halqasidir.",
        },
      },
    },
    {
      char: "天",
      onyomi: "テン",
      kunyomi: "あま",
      meanings: {
        ru: "небо",
        uz: "osmon",
      },
      words: [
        {
          kanji: "天気",
          kana: "てんき",
          mean_ru: "погода",
          mean_uz: "ob-havo",
        },
        {
          kanji: "天才",
          kana: "てんさい",
          mean_ru: "гений",
          mean_uz: "daho",
        },
        {
          kanji: "天気予報",
          kana: "てんきよほう",
          mean_ru: "прогноз погоды",
          mean_uz: "ob-havo ma'lumoti",
        },
      ],
      sentence: {
        jp: "明日は天気がいいから、散歩に行きませんか。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "は" },
          { kanji: "天気", reading: "てんき" },
          { text: "がいいから、" },
          { kanji: "散歩", reading: "さんぽ" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "きませんか。" },
        ],
        translation: {
          ru: "Завтра будет отличная погода, не хочешь сходить прогуляться?",
          uz: "Ertaga havo yaxshi bo'ladi, aylanib kelmaymizmi?",
        },
        grammarPoint: {
          ru: "〜ませんか — классическая форма приглашения. Вы как бы спрашиваете «а не пойти ли нам?», оставляя человеку возможность вежливо отказаться. Очень по-японски!",
          uz: "〜ませんか — taklif qilishning klassik shakli. Siz go'yoki «bormaymizmi?» deb so'raysiz, bunda suhbatdoshingizga muloyim rad etish imkoniyatini qoldirasiz.",
        },
      },
    },
    {
      char: "女",
      onyomi: "ジョ, ニョ",
      kunyomi: "おんな",
      meanings: {
        ru: "женщина",
        uz: "ayol",
      },
      words: [
        {
          kanji: "女の人",
          kana: "おんなのひと",
          mean_ru: "женщина",
          mean_uz: "ayol kishi",
        },
        {
          kanji: "女の子",
          kana: "おんなのこ",
          mean_ru: "девочка",
          mean_uz: "qiz bola",
        },
        {
          kanji: "彼女",
          kana: "かのじょ",
          mean_ru: "она, девушка",
          mean_uz: "u, qiz o'rtoq",
        },
      ],
      sentence: {
        jp: "あそこでスマホを見ている女の人が、私の姉です。",
        rubyData: [
          { text: "あそこでスマホを" },
          { kanji: "見", reading: "み" },
          { text: "ている" },
          { kanji: "女の人", reading: "おんなのひと" },
          { text: "が、" },
          { kanji: "私", reading: "わたし" },
          { text: "の" },
          { kanji: "姉", reading: "あね" },
          { text: "です。" },
        ],
        translation: {
          ru: "Та женщина вон там, которая смотрит в телефон — моя старшая сестра.",
          uz: "Anavi yerda telefoniga qarab turgan ayol — mening opam.",
        },
        grammarPoint: {
          ru: "Глагол (<ruby>見<rt>み</rt></ruby>ている) напрямую присоединяется к существительному (<ruby>女の人<rt>おんなのひと</rt></ruby>), создавая определение. Японцы говорят «смотрящая женщина».",
          uz: "Fe'l (<ruby>見<rt>み</rt></ruby>ている) to'g'ridan-to'g'ri otga (<ruby>女の人<rt>おんなのひと</rt></ruby>) ulanib, sifatlovchi yasaydi. O'zbek tilidagi kabi «qarab turgan ayol» deb tushuntiriladi.",
        },
      },
    },
    {
      char: "子",
      onyomi: "シ, ス",
      kunyomi: "こ",
      meanings: {
        ru: "ребенок",
        uz: "bola",
      },
      words: [
        {
          kanji: "子供",
          kana: "こども",
          mean_ru: "ребенок",
          mean_uz: "bola",
        },
        {
          kanji: "男の子",
          kana: "おとこのこ",
          mean_ru: "мальчик",
          mean_uz: "o'g'il bola",
        },
        {
          kanji: "電子レンジ",
          kana: "でんしれんじ",
          mean_ru: "микроволновка",
          mean_uz: "mikroto'lqinli pech",
        },
      ],
      sentence: {
        jp: "買ってきたお弁当を電子レンジで温めます。",
        rubyData: [
          { kanji: "買", reading: "か" },
          { text: "ってきたお" },
          { kanji: "弁当", reading: "べんとう" },
          { text: "を" },
          { kanji: "電子", reading: "でんし" },
          { text: "レンジで" },
          { kanji: "温", reading: "あたた" },
          { text: "めます。" },
        ],
        translation: {
          ru: "Я погрею в микроволновке бэнто, которое только что купил.",
          uz: "Hozir sotib olib kelgan bentoni mikroto'lqinli pechda isitaman.",
        },
        grammarPoint: {
          ru: "〜てきた (от てくる) — действие, которое вы совершили где-то и вернулись (купил и принес). <ruby>電子<rt>でんし</rt></ruby>レンジ — супер-полезное слово из повседневной жизни.",
          uz: "〜てきた (てくる dan) — qayerdadir biror ishni qilib, qaytib kelish ma'nosi (sotib olib keldim). <ruby>電子<rt>でんし</rt></ruby>レンジ — kundalik hayotda eng ko'p kerak bo'ladigan so'z.",
        },
      },
    },
    {
      char: "学",
      onyomi: "ガク",
      kunyomi: "まな.ぶ",
      meanings: {
        ru: "учиться, наука",
        uz: "o'qimoq, ilm",
      },
      words: [
        {
          kanji: "学校",
          kana: "がっこう",
          mean_ru: "школа",
          mean_uz: "maktab",
        },
        {
          kanji: "学生",
          kana: "がくせい",
          mean_ru: "студент",
          mean_uz: "talaba",
        },
        {
          kanji: "学生証",
          kana: "がくせいしょう",
          mean_ru: "студенческий билет",
          mean_uz: "talabalik guvohnomasi",
        },
      ],
      sentence: {
        jp: "学生証を見せれば、安くなりますよ。",
        rubyData: [
          { kanji: "学生証", reading: "がくせいしょう" },
          { text: "を" },
          { kanji: "見", reading: "み" },
          { text: "せれば、" },
          { kanji: "安", reading: "やす" },
          { text: "くなりますよ。" },
        ],
        translation: {
          ru: "Если покажете студенческий билет, будет дешевле.",
          uz: "Talabalik guvohnomasini ko'rsatsangiz, arzonroq bo'ladi.",
        },
        grammarPoint: {
          ru: "Условие на 〜ば (здесь <ruby>見<rt>み</rt></ruby>せれば — «если показать») используется для логических связей: сделайте А, и обязательно случится Б. Обязательно пользуйтесь этим для получения скидок (学割)!",
          uz: "〜ば (bu yerda <ruby>見<rt>み</rt></ruby>せれば — «ko'rsatsa») shart mayli mantiqiy bog'lanishlar uchun ishlatiladi: A ni qiling va albatta B sodir bo'ladi. Chegirmalar olish uchun bundan albatta foydalaning!",
        },
      },
    },
    {
      char: "小",
      onyomi: "ショウ",
      kunyomi: "ちい.さい, こ, お",
      meanings: {
        ru: "маленький",
        uz: "kichkina",
      },
      words: [
        {
          kanji: "小さい",
          kana: "ちいさい",
          mean_ru: "маленький",
          mean_uz: "kichkina",
        },
        {
          kanji: "小銭",
          kana: "こぜに",
          mean_ru: "мелочь (монеты)",
          mean_uz: "mayda pul (tanga)",
        },
        {
          kanji: "小学校",
          kana: "しょうがっこう",
          mean_ru: "младшая школа",
          mean_uz: "boshlang'ich maktab",
        },
      ],
      sentence: {
        jp: "ちょっと小さいですね。もう少し大きいのはありますか。",
        rubyData: [
          { text: "ちょっと" },
          { kanji: "小", reading: "ちい" },
          { text: "さいですね。もう少し" },
          { kanji: "大", reading: "おお" },
          { text: "きいのはありますか。" },
        ],
        translation: {
          ru: "Чуть маловато. У вас есть размер побольше?",
          uz: "Biroz kichkina ekan. Kattarog'i bormi?",
        },
        grammarPoint: {
          ru: "Конструкция 〜のは (то, которое...) заменяет существительное, чтобы не повторять его дважды. Это гениальная фраза для шопинга: когда просите другой размер или цвет, просто добавляете の к прилагательному. <ruby>大<rt>おお</rt></ruby>きいのは = «то, которое побольше».",
          uz: "〜のは (o'shanaqasi) qurilmasi otni takrorlamaslik uchun uning o'rniga keladi. Do'konda boshqa o'lcham yoki rang so'raganda sifatga の qo'shib ishlatish juda qulay. <ruby>大<rt>おお</rt></ruby>きいのは = «kattarog'i».",
        },
      },
    },
    {
      char: "山",
      onyomi: "サン",
      kunyomi: "やま",
      meanings: {
        ru: "гора",
        uz: "tog'",
      },
      words: [
        {
          kanji: "山",
          kana: "やま",
          mean_ru: "гора",
          mean_uz: "tog'",
        },
        {
          kanji: "富士山",
          kana: "ふじさん",
          mean_ru: "гора Фудзи",
          mean_uz: "Fudzi tog'i",
        },
        {
          kanji: "登山",
          kana: "とざん",
          mean_ru: "альпинизм",
          mean_uz: "toqqa chiqish",
        },
      ],
      sentence: {
        jp: "今度の休み、友達と山にキャンプに行きます。",
        rubyData: [
          { kanji: "今度", reading: "こんど" },
          { text: "の" },
          { kanji: "休", reading: "やす" },
          { text: "み、" },
          { kanji: "友達", reading: "ともだち" },
          { text: "と" },
          { kanji: "山", reading: "やま" },
          { text: "にキャンプに" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "В следующие выходные мы с друзьями едем в горы на кемпинг.",
          uz: "Kelasi dam olish kunlari do'stlarim bilan toqqa kempingga boramiz.",
        },
        grammarPoint: {
          ru: "Глагол <ruby>行<rt>い</rt></ruby>く (идти) с частицей に означает «идти с какой-то целью». <ruby>山<rt>やま</rt></ruby>にキャンプに<ruby>行<rt>い</rt></ruby>く = «поехать в горы на кемпинг». Звучит живо и естественно при рассказе о планах.",
          uz: "<ruby>行<rt>い</rt></ruby>く (bormoq) fe'li に yuklamasi bilan «biror maqsad bilan bormoq» degan ma'noni bildiradi. <ruby>山<rt>やま</rt></ruby>にキャンプに<ruby>行<rt>い</rt></ruby>く = «toqqa kempingga bormoq». Rejalarni aytib berganda juda tabiiy eshitiladi.",
        },
      },
    },
    {
      char: "川",
      onyomi: "セン",
      kunyomi: "かわ",
      meanings: {
        ru: "река",
        uz: "daryo",
      },
      words: [
        {
          kanji: "川",
          kana: "かわ",
          mean_ru: "река",
          mean_uz: "daryo",
        },
        {
          kanji: "小川",
          kana: "おがわ",
          mean_ru: "ручей",
          mean_uz: "jilg'a",
        },
        {
          kanji: "川岸",
          kana: "かわぎし",
          mean_ru: "берег реки",
          mean_uz: "daryo qirg'og'i",
        },
      ],
      sentence: {
        jp: "この川の近くに、すごくお洒落なカフェがあるんですよ。",
        rubyData: [
          { text: "この" },
          { kanji: "川", reading: "かわ" },
          { text: "の" },
          { kanji: "近", reading: "ちか" },
          { text: "くに、すごくお" },
          { kanji: "洒落", reading: "しゃれ" },
          { text: "なカフェがあるんですよ。" },
        ],
        translation: {
          ru: "Возле этой реки есть очень стильное кафе, представляешь.",
          uz: "Bu daryoning yaqinida juda zamonaviy kafe bor, bilsangiz.",
        },
        grammarPoint: {
          ru: "Частица よ в конце предложения добавляет оттенок «делюсь полезной инфой, которую ты, возможно, не знаешь». Именно так японцы рекомендуют друзьям классные места.",
          uz: "Gap oxiridagi よ yuklamasi «sen bilmagan qiziqarli ma'lumotni aytmoqdaman» degan ma'noni beradi. Yaponlar do'stlariga yaxshi joylarni aynan shunday tavsiya qilishadi.",
        },
      },
    },
    {
      char: "左",
      onyomi: "サ",
      kunyomi: "ひだり",
      meanings: {
        ru: "лево",
        uz: "chap",
      },
      words: [
        {
          kanji: "左",
          kana: "ひだり",
          mean_ru: "лево",
          mean_uz: "chap",
        },
        {
          kanji: "左手",
          kana: "ひだりて",
          mean_ru: "левая рука",
          mean_uz: "chap qo'l",
        },
        {
          kanji: "左側",
          kana: "ひだりがわ",
          mean_ru: "левая сторона",
          mean_uz: "chap tomon",
        },
      ],
      sentence: {
        jp: "次の信号を左に曲がってください。",
        rubyData: [
          { kanji: "次", reading: "つぎ" },
          { text: "の" },
          { kanji: "信号", reading: "しんごう" },
          { text: "を" },
          { kanji: "左", reading: "ひだり" },
          { text: "に" },
          { kanji: "曲", reading: "まが" },
          { text: "ってください。" },
        ],
        translation: {
          ru: "Пожалуйста, поверните налево на следующем светофоре.",
          uz: "Iltimos, keyingi svetofordan chapga buriling.",
        },
        grammarPoint: {
          ru: "Когда мы указываем, где повернуть (на перекрёстке, светофоре), используется частица を. Эта фраза — ваш лучший друг в любом японском такси.",
          uz: "Qayerdan burilishni (chorraha, svetofor) aytayotganda を yuklamasi ishlatiladi. Bu ibora Yaponiyadagi taksilarda eng ko'p asqotadigan gapdir.",
        },
      },
    },
    {
      char: "年",
      onyomi: "ネン",
      kunyomi: "とし",
      meanings: {
        ru: "год",
        uz: "yil",
      },
      words: [
        {
          kanji: "今年",
          kana: "ことし",
          mean_ru: "этот год",
          mean_uz: "bu yil",
        },
        {
          kanji: "来年",
          kana: "らいねん",
          mean_ru: "следующий год",
          mean_uz: "kelasi yil",
        },
        {
          kanji: "毎年",
          kana: "まいとし",
          mean_ru: "каждый год",
          mean_uz: "har yili",
        },
      ],
      sentence: {
        jp: "日本に来てから、もう三年が経ちました。",
        rubyData: [
          { kanji: "日本", reading: "にほん" },
          { text: "に" },
          { kanji: "来", reading: "き" },
          { text: "てから、もう" },
          { kanji: "三年", reading: "さんねん" },
          { text: "が" },
          { kanji: "経", reading: "た" },
          { text: "ちました。" },
        ],
        translation: {
          ru: "С тех пор как я приехал в Японию, прошло уже три года.",
          uz: "Yaponiyaga kelganimdan beri allaqachon uch yil o'tdi.",
        },
        grammarPoint: {
          ru: "〜てから означает «с тех пор как». Этой конструкцией всегда рассказывают про опыт жизни в стране: приехал, и с того момента пошло время.",
          uz: "〜てから «shundan beri» degan ma'noni anglatadi. Biror mamlakatdagi tajriba haqida gapirganda doim shundan foydalaniladi: kelganingizdan boshlab o'tgan vaqtni bildiradi.",
        },
      },
    },
    {
      char: "後",
      onyomi: "ゴ, コウ",
      kunyomi: "あと, うし.ろ",
      meanings: {
        ru: "после, позади",
        uz: "keyin, orqa",
      },
      words: [
        {
          kanji: "後ろ",
          kana: "うしろ",
          mean_ru: "сзади",
          mean_uz: "orqada",
        },
        {
          kanji: "後で",
          kana: "あとで",
          mean_ru: "позже",
          mean_uz: "keyinroq",
        },
        {
          kanji: "午後",
          kana: "ごご",
          mean_ru: "после полудня",
          mean_uz: "tushdan keyin",
        },
      ],
      sentence: {
        jp: "今ちょっと忙しいので、後で電話してもいいですか。",
        rubyData: [
          { kanji: "今", reading: "いま" },
          { text: "ちょっと" },
          { kanji: "忙", reading: "いそが" },
          { text: "しいので、" },
          { kanji: "後", reading: "あと" },
          { text: "で" },
          { kanji: "電話", reading: "でんわ" },
          { text: "してもいいですか。" },
        ],
        translation: {
          ru: "Я сейчас немного занят, можно перезвоню позже?",
          uz: "Hozir biroz bandman, keyinroq qo'ng'iroq qilsam maylimi?",
        },
        grammarPoint: {
          ru: "〜てもいいですか — вежливый способ отпроситься или предложить свой вариант. А <ruby>後<rt>あと</rt></ruby>で (позже) — спасательный круг, если вас отвлекают на работе.",
          uz: "〜てもいいですか — ruxsat so'rash yoki o'z variantingizni taklif qilishning xushmuomala usuli. <ruby>後<rt>あと</rt></ruby>で (keyinroq) esa ish paytida chalg'itishganda eng qulay javob.",
        },
      },
    },
    {
      char: "日",
      onyomi: "ニチ, ジツ",
      kunyomi: "ひ, -か",
      meanings: {
        ru: "день, солнце",
        uz: "kun, quyosh",
      },
      words: [
        {
          kanji: "毎日",
          kana: "まいにち",
          mean_ru: "каждый день",
          mean_uz: "har kuni",
        },
        {
          kanji: "今日",
          kana: "きょう",
          mean_ru: "сегодня",
          mean_uz: "bugun",
        },
        {
          kanji: "日曜日",
          kana: "にちようび",
          mean_ru: "воскресенье",
          mean_uz: "yakshanba",
        },
      ],
      sentence: {
        jp: "今日は天気がいいから、外でランチを食べましょう。",
        rubyData: [
          { kanji: "今日", reading: "きょう" },
          { text: "は" },
          { kanji: "天気", reading: "てんき" },
          { text: "がいいから、" },
          { kanji: "外", reading: "そと" },
          { text: "でランチを" },
          { kanji: "食", reading: "た" },
          { text: "べましょう。" },
        ],
        translation: {
          ru: "Сегодня классная погода, давайте пообедаем на улице!",
          uz: "Bugun ob-havo ajoyib, keling, tushlikni ko'chada yeymiz!",
        },
        grammarPoint: {
          ru: "Форма 〜ましょう (давай сделаем) отлично работает с объяснением причины через 〜から (так как). Звучит естественно и позитивно: «раз погода хорошая, давай...».",
          uz: "〜ましょう (keliylik, qilaylik) shakli 〜から (uchun/sababli) bilan birga juda yaxshi ishlaydi. Tabiiy va ijobiy eshitiladi: «havo yaxshi bo'lgani uchun, keling...».",
        },
      },
    },
    {
      char: "時",
      onyomi: "ジ",
      kunyomi: "とき",
      meanings: {
        ru: "время, час",
        uz: "vaqt, soat",
      },
      words: [
        {
          kanji: "時間",
          kana: "じかん",
          mean_ru: "время",
          mean_uz: "vaqt",
        },
        {
          kanji: "時計",
          kana: "とけい",
          mean_ru: "часы",
          mean_uz: "soat (apparat)",
        },
        {
          kanji: "時々",
          kana: "ときどき",
          mean_ru: "иногда",
          mean_uz: "ba'zan",
        },
      ],
      sentence: {
        jp: "明日の待ち合わせ、時間は何時がいいですか。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "の" },
          { kanji: "待", reading: "ま" },
          { text: "ち" },
          { kanji: "合", reading: "あ" },
          { text: "わせ、" },
          { kanji: "時間", reading: "じかん" },
          { text: "は" },
          { kanji: "何時", reading: "なんじ" },
          { text: "がいいですか。" },
        ],
        translation: {
          ru: "Какое время встречи завтра тебе удобнее?",
          uz: "Ertaga uchrashishimiz uchun soat necha sizga ma'qul?",
        },
        grammarPoint: {
          ru: "<ruby>何時<rt>なんじ</rt></ruby>がいいですか (буквально «какое время хорошее?») — самый частый и вежливый способ договориться о встрече в японских мессенджерах.",
          uz: "<ruby>何時<rt>なんじ</rt></ruby>がいいですか (so'zma-so'z «qaysi vaqt yaxshi?») — yapon messenjerlarida uchrashuv belgilashning eng keng tarqalgan va xushmuomala usuli.",
        },
      },
    },
    {
      char: "書",
      onyomi: "ショ",
      kunyomi: "か.く",
      meanings: {
        ru: "писать",
        uz: "yozmoq",
      },
      words: [
        {
          kanji: "書く",
          kana: "かく",
          mean_ru: "писать",
          mean_uz: "yozmoq",
        },
        {
          kanji: "辞書",
          kana: "じしょ",
          mean_ru: "словарь",
          mean_uz: "lug'at",
        },
        {
          kanji: "図書館",
          kana: "としょかん",
          mean_ru: "библиотека",
          mean_uz: "kutubxona",
        },
      ],
      sentence: {
        jp: "ここに住所と名前を書いてください。",
        rubyData: [
          { text: "ここに" },
          { kanji: "住所", reading: "じゅうしょ" },
          { text: "と" },
          { kanji: "名前", reading: "なまえ" },
          { text: "を" },
          { kanji: "書", reading: "か" },
          { text: "いてください。" },
        ],
        translation: {
          ru: "Пожалуйста, напишите здесь свой адрес и имя.",
          uz: "Iltimos, bu yerga manzilingiz va ismingizni yozing.",
        },
        grammarPoint: {
          ru: "Эту фразу вы услышите везде: в мэрии (kuyakusho), на почте, в отеле, при открытии счёта. 〜てください — стандартная просьба выполнить нужное действие.",
          uz: "Bu gapni hamma joyda eshitasiz: shahar hokimiyatida (kuyakusho), pochtada, mehmonxonada, bankda. 〜てください — biror ishni bajarishni so'rashning standart yo'li.",
        },
      },
    },
    {
      char: "月",
      onyomi: "ゲツ, ガツ",
      kunyomi: "つき",
      meanings: {
        ru: "месяц, луна",
        uz: "oy",
      },
      words: [
        {
          kanji: "今月",
          kana: "こんげつ",
          mean_ru: "этот месяц",
          mean_uz: "bu oy",
        },
        {
          kanji: "来月",
          kana: "らいげつ",
          mean_ru: "следующий месяц",
          mean_uz: "kelasi oy",
        },
        {
          kanji: "月曜日",
          kana: "げつようび",
          mean_ru: "понедельник",
          mean_uz: "dushanba",
        },
      ],
      sentence: {
        jp: "来月の家賃はもう払いましたか。",
        rubyData: [
          { kanji: "来月", reading: "らいげつ" },
          { text: "の" },
          { kanji: "家賃", reading: "やちん" },
          { text: "はもう" },
          { kanji: "払", reading: "はら" },
          { text: "いましたか。" },
        ],
        translation: {
          ru: "Ты уже заплатил за аренду в следующем месяце?",
          uz: "Kelasi oy ijara pulini to'lab bo'ldingizmi?",
        },
        grammarPoint: {
          ru: "Слово もう (уже) с глаголом в прошедшем времени — идеальный способ уточнить, завершено ли дело (оплата счетов, отправка письма, проверка дома).",
          uz: "もう (allachaqon) so'zi o'tgan zamon fe'li bilan birga biror ish bitgan-bitmaganligini aniqlash uchun ishlatiladi (to'lovlar yoki xat yuborish).",
        },
      },
    },
    {
      char: "木",
      onyomi: "モク, ボク",
      kunyomi: "き",
      meanings: {
        ru: "дерево",
        uz: "daraxt",
      },
      words: [
        {
          kanji: "木",
          kana: "き",
          mean_ru: "дерево",
          mean_uz: "daraxt",
        },
        {
          kanji: "木曜日",
          kana: "もくようび",
          mean_ru: "четверг",
          mean_uz: "payshanba",
        },
        {
          kanji: "植木",
          kana: "うえき",
          mean_ru: "растение (в горшке/саду)",
          mean_uz: "o'simlik",
        },
      ],
      sentence: {
        jp: "木曜日は燃えるゴミの日です。",
        rubyData: [
          { kanji: "木曜日", reading: "もくようび" },
          { text: "は" },
          { kanji: "燃", reading: "も" },
          { text: "えるゴミの" },
          { kanji: "日", reading: "ひ" },
          { text: "です。" },
        ],
        translation: {
          ru: "Четверг — день сжигаемого мусора.",
          uz: "Payshanba — yonadigan axlat kuni.",
        },
        grammarPoint: {
          ru: "Япония — страна строгой сортировки мусора. Выражение <ruby>燃<rt>も</rt></ruby>えるゴミ (сжигаемый мусор) вы увидите на каждой урне и в памятке от арендодателя.",
          uz: "Yaponiya — axlat qat'iy saralanadigan davlat. <ruby>燃<rt>も</rt></ruby>えるゴミ (yonadigan axlat) yozuvini har bir axlat qutisi va ijaraga beruvchining qo'llanmasida ko'rasiz.",
        },
      },
    },
    {
      char: "本",
      onyomi: "ホン",
      kunyomi: "もと",
      meanings: {
        ru: "книга, основа",
        uz: "kitob, asos",
      },
      words: [
        {
          kanji: "本",
          kana: "ほん",
          mean_ru: "книга",
          mean_uz: "kitob",
        },
        {
          kanji: "日本",
          kana: "にほん",
          mean_ru: "Япония",
          mean_uz: "Yaponiya",
        },
        {
          kanji: "本当",
          kana: "ほんとう",
          mean_ru: "правда",
          mean_uz: "haqiqat, rost",
        },
      ],
      sentence: {
        jp: "えっ、それ本当ですか。ちょっと信じられないです。",
        rubyData: [
          { text: "えっ、それ" },
          { kanji: "本当", reading: "ほんとう" },
          { text: "ですか。ちょっと" },
          { kanji: "信", reading: "しん" },
          { text: "じられないです。" },
        ],
        translation: {
          ru: "А? Это правда? Что-то не верится!",
          uz: "Iya, rostdanmi? Ishonish qiyin!",
        },
        grammarPoint: {
          ru: "<ruby>本当<rt>ほんとう</rt></ruby>ですか (Правда?) — главная реакция удивления. А слово ちょっと здесь не значит «немного», оно смягчает отказ или сомнение (ну, как-то не верится).",
          uz: "<ruby>本当<rt>ほんとう</rt></ruby>ですか (Rostdanmi?) — hayratlanishning asosiy reaksiyasi. ちょっと so'zi esa bu yerda «biroz» emas, balki rad etish yoki ikkilanishni yumshatish uchun ishlatiladi.",
        },
      },
    },
    {
      char: "来",
      onyomi: "ライ",
      kunyomi: "く.る",
      meanings: {
        ru: "приходить",
        uz: "kelmoq",
      },
      words: [
        {
          kanji: "来る",
          kana: "くる",
          mean_ru: "приходить",
          mean_uz: "kelmoq",
        },
        {
          kanji: "来週",
          kana: "らいしゅう",
          mean_ru: "следующая неделя",
          mean_uz: "kelasi hafta",
        },
        {
          kanji: "未来",
          kana: "みらい",
          mean_ru: "будущее",
          mean_uz: "kelajak",
        },
      ],
      sentence: {
        jp: "週末、うちにご飯を食べに来ませんか。",
        rubyData: [
          { kanji: "週末", reading: "しゅうまつ" },
          { text: "、うちにご" },
          { kanji: "飯", reading: "はん" },
          { text: "を" },
          { kanji: "食", reading: "た" },
          { text: "べに" },
          { kanji: "来", reading: "き" },
          { text: "ませんか。" },
        ],
        translation: {
          ru: "Не хочешь прийти ко мне на выходных поесть?",
          uz: "Dam olish kuni uyimizga ovqatlanishga kelmaysizmi?",
        },
        grammarPoint: {
          ru: "Конструкция «основа глагола + に来る» означает «прийти с целью что-то сделать». Очень естественно звучит при приглашении друзей в гости.",
          uz: "«Fe'l asosi + に来る» qurilmasi «biror maqsadda kelish» degan ma'noni beradi. Do'stlarni mehmonga chaqirganda juda tabiiy eshitiladi.",
        },
      },
    },
    {
      char: "東",
      onyomi: "トウ",
      kunyomi: "ひがし",
      meanings: {
        ru: "восток",
        uz: "sharq",
      },
      words: [
        {
          kanji: "東",
          kana: "ひがし",
          mean_ru: "восток",
          mean_uz: "sharq",
        },
        {
          kanji: "東京",
          kana: "とうきょう",
          mean_ru: "Токио",
          mean_uz: "Tokio",
        },
        {
          kanji: "東口",
          kana: "ひがしぐち",
          mean_ru: "восточный выход",
          mean_uz: "sharqiy chiqish",
        },
      ],
      sentence: {
        jp: "新宿駅の東口で待っていますね。",
        rubyData: [
          { kanji: "新宿駅", reading: "しんじゅくえき" },
          { text: "の" },
          { kanji: "東口", reading: "ひがしぐち" },
          { text: "で" },
          { kanji: "待", reading: "ま" },
          { text: "っていますね。" },
        ],
        translation: {
          ru: "Я жду у восточного выхода станции Синдзюку.",
          uz: "Shinjuku bekatining sharqiy chiqishida kutyapman.",
        },
        grammarPoint: {
          ru: "Японские станции огромны, поэтому встречи всегда назначают у конкретного выхода (東口, 西口). 〜ています показывает процесс — вы уже стоите там и ждёте.",
          uz: "Yapon bekatlari juda katta, shuning uchun uchrashuvlar doim aniq chiqish (東口, 西口) oldida belgilanadi. 〜ています jarayonni bildiradi — siz u yerda turibsiz va kutyapsiz.",
        },
      },
    },
    {
      char: "校",
      onyomi: "コウ",
      kunyomi: "",
      meanings: {
        ru: "школа",
        uz: "maktab",
      },
      words: [
        {
          kanji: "学校",
          kana: "がっこう",
          mean_ru: "школа",
          mean_uz: "maktab",
        },
        {
          kanji: "高校",
          kana: "こうこう",
          mean_ru: "старшая школа",
          mean_uz: "yuqori maktab",
        },
        {
          kanji: "校長",
          kana: "こうちょう",
          mean_ru: "директор школы",
          mean_uz: "maktab direktori",
        },
      ],
      sentence: {
        jp: "高校の時の友達と、久しぶりに飲みに行きます。",
        rubyData: [
          { kanji: "高校", reading: "こうこう" },
          { text: "の" },
          { kanji: "時", reading: "とき" },
          { text: "の" },
          { kanji: "友達", reading: "ともだち" },
          { text: "と、" },
          { kanji: "久", reading: "ひさ" },
          { text: "しぶりに" },
          { kanji: "飲", reading: "の" },
          { text: "みに" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "Иду выпить со школьными друзьями, давно не виделись.",
          uz: "Maktab davridagi do'stlarim bilan ancha vaqtdan keyin ichgani boryapmiz.",
        },
        grammarPoint: {
          ru: "<ruby>久<rt>ひさ</rt></ruby>しぶりに (давно не...) — святая фраза для встреч. А <ruby>飲<rt>の</rt></ruby>みに<ruby>行<rt>い</rt></ruby>く (идти выпить) — самый популярный формат отдыха после работы.",
          uz: "<ruby>久<rt>ひさ</rt></ruby>しぶりに (ancha vaqtdan so'ng...) — uchrashuvlarda eng ko'p aytiladigan ibora. <ruby>飲<rt>の</rt></ruby>みに<ruby>行<rt>い</rt></ruby>く (ichgani bormoq) esa ishdan keyin dam olishning eng mashhur usuli.",
        },
      },
    },
    {
      char: "母",
      onyomi: "ボ",
      kunyomi: "はは",
      meanings: {
        ru: "мать",
        uz: "ona",
      },
      words: [
        {
          kanji: "母",
          kana: "はは",
          mean_ru: "моя мама",
          mean_uz: "onam",
        },
        {
          kanji: "お母さん",
          kana: "おかあさん",
          mean_ru: "мама (вежливо/чужая)",
          mean_uz: "ona (xushmuomala/boshqaning)",
        },
        {
          kanji: "祖母",
          kana: "そぼ",
          mean_ru: "бабушка",
          mean_uz: "buvi",
        },
      ],
      sentence: {
        jp: "明日、母が日本に遊びに来ます。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "、" },
          { kanji: "母", reading: "はは" },
          { text: "が" },
          { kanji: "日本", reading: "にほん" },
          { text: "に" },
          { kanji: "遊", reading: "あそ" },
          { text: "びに" },
          { kanji: "来", reading: "き" },
          { text: "ます。" },
        ],
        translation: {
          ru: "Завтра моя мама приезжает в Японию погостить.",
          uz: "Ertaga onam Yaponiyaga mehmonga kelyaptilar.",
        },
        grammarPoint: {
          ru: "Глагол <ruby>遊<rt>あそ</rt></ruby>びに<ruby>来<rt>く</rt></ruby>る (букв. приехать играть) у взрослых используется в значении «приехать в гости/потусить/проведать». Так говорят о визитах родных и друзей.",
          uz: "Kattalar orasida <ruby>遊<rt>あそ</rt></ruby>びに<ruby>来<rt>く</rt></ruby>る (so'zma-so'z: o'ynagani kelish) fe'li «mehmonga kelish/ko'rishgani kelish» ma'nosida ishlatiladi. Do'stlar yoki qarindoshlar tashrifiga shunday deyiladi.",
        },
      },
    },
    {
      char: "毎",
      onyomi: "マイ",
      kunyomi: "",
      meanings: {
        ru: "каждый",
        uz: "har",
      },
      words: [
        {
          kanji: "毎日",
          kana: "まいにち",
          mean_ru: "каждый день",
          mean_uz: "har kuni",
        },
        {
          kanji: "毎朝",
          kana: "まいあさ",
          mean_ru: "каждое утро",
          mean_uz: "har tong",
        },
        {
          kanji: "毎週",
          kana: "まいしゅう",
          mean_ru: "каждую неделю",
          mean_uz: "har hafta",
        },
      ],
      sentence: {
        jp: "毎朝、コンビニでコーヒーを買ってから会社に行きます。",
        rubyData: [
          { kanji: "毎朝", reading: "まいあさ" },
          { text: "、コンビニでコーヒーを" },
          { kanji: "買", reading: "か" },
          { text: "ってから" },
          { kanji: "会社", reading: "かいしゃ" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "Каждое утро я покупаю кофе в комбини, а потом иду на работу.",
          uz: "Har tong konbinidan kofe sotib olib, keyin ishga boraman.",
        },
        grammarPoint: {
          ru: "〜てから означает строгую последовательность: «сделал одно, и только потом перешёл к другому». Идеально для описания утренней рутины: купил кофе, а затем пошёл в офис.",
          uz: "〜てから qat'iy ketma-ketlikni bildiradi: «oldin bitta ishni qilib, keyin boshqasiga o'tdim». Tongi odatlarni tushuntirish uchun juda mos: kofe sotib oldim va shundan keyin ofisga bordim.",
        },
      },
    },
    {
      char: "気",
      onyomi: "キ, ケ",
      kunyomi: "",
      meanings: {
        ru: "дух, настроение",
        uz: "ruh, kayfiyat",
      },
      words: [
        {
          kanji: "天気",
          kana: "てんき",
          mean_ru: "погода",
          mean_uz: "ob-havo",
        },
        {
          kanji: "元気",
          kana: "げんき",
          mean_ru: "бодрый, здоровый",
          mean_uz: "tetik, sog'lom",
        },
        {
          kanji: "気持ち",
          kana: "きもち",
          mean_ru: "чувство, настроение",
          mean_uz: "his-tuyg'u",
        },
      ],
      sentence: {
        jp: "外は寒いから、気をつけて帰ってね。",
        rubyData: [
          { kanji: "外", reading: "そと" },
          { text: "は" },
          { kanji: "寒", reading: "さむ" },
          { text: "いから、" },
          { kanji: "気", reading: "き" },
          { text: "をつけて" },
          { kanji: "帰", reading: "かえ" },
          { text: "ってね。" },
        ],
        translation: {
          ru: "На улице холодно, так что будь осторожен по пути домой.",
          uz: "Tashqari sovuq, shuning uchun ehtiyot bo'lib uyga qayt.",
        },
        grammarPoint: {
          ru: "Окончание 〜てね — это мягкая, дружеская просьба или забота. <ruby>気<rt>き</rt></ruby>をつけて (будь осторожен) японцы говорят друг другу при каждом прощании.",
          uz: "〜てね qo'shimchasi yumshoq, do'stona iltimos yoki g'amxo'rlikdir. Yaponlar har safar xayrlashganda bir-birlariga <ruby>気<rt>き</rt></ruby>をつけて (ehtiyot bo'l) deyishadi.",
        },
      },
    },
    {
      char: "水",
      onyomi: "スイ",
      kunyomi: "みず",
      meanings: {
        ru: "вода",
        uz: "suv",
      },
      words: [
        {
          kanji: "水",
          kana: "みず",
          mean_ru: "вода",
          mean_uz: "suv",
        },
        {
          kanji: "水曜日",
          kana: "すいようび",
          mean_ru: "среда",
          mean_uz: "chorshanba",
        },
        {
          kanji: "水道",
          kana: "すいどう",
          mean_ru: "водопровод",
          mean_uz: "vodoprovod",
        },
      ],
      sentence: {
        jp: "すみません、お水をもう一杯もらえますか。",
        rubyData: [
          { text: "すみません、お" },
          { kanji: "水", reading: "みず" },
          { text: "をもう" },
          { kanji: "一杯", reading: "いっぱい" },
          { text: "もらえますか。" },
        ],
        translation: {
          ru: "Извините, можно мне ещё один стакан воды?",
          uz: "Kechirasiz, yana bir stakan suv olsam maylimi?",
        },
        grammarPoint: {
          ru: "〜もらえますか — очень вежливый способ попросить что-то в ресторане или кафе. Звучит намного естественнее и культурнее, чем просто «дай воды».",
          uz: "〜もらえますか — restoran yoki kafeda biror narsa so'rashning eng madaniyatli usuli. Shunchaki «suv ber» degandan ko'ra ancha tabiiy va xushmuomala eshitiladi.",
        },
      },
    },
    {
      char: "火",
      onyomi: "カ",
      kunyomi: "ひ",
      meanings: {
        ru: "огонь",
        uz: "olov",
      },
      words: [
        {
          kanji: "火",
          kana: "ひ",
          mean_ru: "огонь",
          mean_uz: "olov",
        },
        {
          kanji: "火曜日",
          kana: "かようび",
          mean_ru: "вторник",
          mean_uz: "seshanba",
        },
        {
          kanji: "花火",
          kana: "はなび",
          mean_ru: "фейерверк",
          mean_uz: "mushakbozlik",
        },
      ],
      sentence: {
        jp: "出かける前に、ガスの火を消したか確認して。",
        rubyData: [
          { kanji: "出", reading: "で" },
          { text: "かける" },
          { kanji: "前", reading: "まえ" },
          { text: "に、ガスの" },
          { kanji: "火", reading: "ひ" },
          { text: "を" },
          { kanji: "消", reading: "け" },
          { text: "したか" },
          { kanji: "確認", reading: "かくにん" },
          { text: "して。" },
        ],
        translation: {
          ru: "Перед выходом проверь, выключил ли ты огонь на плите.",
          uz: "Uydan chiqishdan oldin gaz plitasini o'chirganingni tekshir.",
        },
        grammarPoint: {
          ru: "Глагол + たか (сделал ли?) — отличный способ проверить завершённость действия. Незаменимая фраза для панических ситуаций: забыл закрыть окно, выключить утюг или газ.",
          uz: "Fe'l + たか (qildingmi yo'qmi?) qurilmasi ishning tugatilganligini tekshirish uchun zo'r usul. Oynani yopish yoki gazni o'chirish esdan chiqqanda juda mos keladi.",
        },
      },
    },
    {
      char: "父",
      onyomi: "フ",
      kunyomi: "ちち",
      meanings: {
        ru: "отец",
        uz: "ota",
      },
      words: [
        {
          kanji: "父",
          kana: "ちち",
          mean_ru: "мой отец",
          mean_uz: "otam",
        },
        {
          kanji: "お父さん",
          kana: "おとうさん",
          mean_ru: "отец (вежливо/чужой)",
          mean_uz: "ota (xushmuomala)",
        },
        {
          kanji: "祖父",
          kana: "そふ",
          mean_ru: "дедушка",
          mean_uz: "bobo",
        },
      ],
      sentence: {
        jp: "父は毎日、車で仕事に行きます。",
        rubyData: [
          { kanji: "父", reading: "ちち" },
          { text: "は" },
          { kanji: "毎日", reading: "まいにち" },
          { text: "、" },
          { kanji: "車", reading: "くるま" },
          { text: "で" },
          { kanji: "仕事", reading: "しごと" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "Мой отец каждый день ездит на работу на машине.",
          uz: "Otam har kuni ishga mashinada boradi.",
        },
        grammarPoint: {
          ru: "Частица で после транспорта указывает на средство передвижения («на чём?»). А に после работы — на цель направления.",
          uz: "Transportdan keyin kelgan で yuklamasi harakat vositasini bildiradi («nimada?»). Ish so'zidan keyingi に esa yo'nalishni ko'rsatadi.",
        },
      },
    },
    {
      char: "生",
      onyomi: "セイ, ショウ",
      kunyomi: "い.きる, う.まれる, なま",
      meanings: {
        ru: "жизнь, сырой",
        uz: "hayot, xom",
      },
      words: [
        {
          kanji: "先生",
          kana: "せんせい",
          mean_ru: "учитель",
          mean_uz: "o'qituvchi",
        },
        {
          kanji: "学生",
          kana: "がくせい",
          mean_ru: "студент",
          mean_uz: "talaba",
        },
        {
          kanji: "生ビール",
          kana: "なまビール",
          mean_ru: "разливное пиво",
          mean_uz: "kuyma pivo",
        },
      ],
      sentence: {
        jp: "とりあえず、生ビールを二つお願いします。",
        rubyData: [
          { text: "とりあえず、" },
          { kanji: "生", reading: "なま" },
          { text: "ビールを" },
          { kanji: "二", reading: "ふた" },
          { text: "つお" },
          { kanji: "願", reading: "ねが" },
          { text: "いします。" },
        ],
        translation: {
          ru: "Для начала, два разливных пива, пожалуйста.",
          uz: "Boshlanishiga, ikkita quyma pivo bering, iltimos.",
        },
        grammarPoint: {
          ru: "とりあえず — легендарное слово в изакаях, означающее «для начала/пока что». Выбираете напитки, говорите эту фразу, и только потом спокойно смотрите меню еды.",
          uz: "とりあえず — izakayalar (yapon kafelari) da eng kerakli so'z, «hozircha/boshlanishiga» degani. Oldin ichimlik buyurtma qilib, keyin bemalol ovqat menyusini ko'rasiz.",
        },
      },
    },
    {
      char: "男",
      onyomi: "ダン, ナン",
      kunyomi: "おとこ",
      meanings: {
        ru: "мужчина",
        uz: "erkak",
      },
      words: [
        {
          kanji: "男の人",
          kana: "おとこのひと",
          mean_ru: "мужчина",
          mean_uz: "erkak kishi",
        },
        {
          kanji: "男の子",
          kana: "おとこのこ",
          mean_ru: "мальчик",
          mean_uz: "o'g'il bola",
        },
        {
          kanji: "男性",
          kana: "だんせい",
          mean_ru: "мужчина (форм.)",
          mean_uz: "erkak (rasmiy)",
        },
      ],
      sentence: {
        jp: "あそこに立っている男の人を知っていますか。",
        rubyData: [
          { text: "あそこに" },
          { kanji: "立", reading: "た" },
          { text: "っている" },
          { kanji: "男", reading: "おとこ" },
          { text: "の" },
          { kanji: "人", reading: "ひと" },
          { text: "を" },
          { kanji: "知", reading: "し" },
          { text: "っていますか。" },
        ],
        translation: {
          ru: "Знаешь того мужчину, который там стоит?",
          uz: "Anavi yerda turgan erkakni taniysizmi?",
        },
        grammarPoint: {
          ru: "В японском целое предложение может работать как прилагательное. <ruby>立<rt>た</rt></ruby>っている (стоит) ставится прямо перед <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby> (мужчина) = «стоящий мужчина».",
          uz: "Yapon tilida butun boshli gap sifat vazifasini bajarishi mumkin. <ruby>立<rt>た</rt></ruby>っている (turibdi) to'g'ridan-to'g'ri <ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby> (erkak) oldidan keladi = «turgan erkak».",
        },
      },
    },
    {
      char: "白",
      onyomi: "ハク, ビャク",
      kunyomi: "しろ, しろ.い",
      meanings: {
        ru: "белый",
        uz: "oq",
      },
      words: [
        {
          kanji: "白い",
          kana: "しろい",
          mean_ru: "белый",
          mean_uz: "oq",
        },
        {
          kanji: "白黒",
          kana: "しろくろ",
          mean_ru: "чёрно-белый",
          mean_uz: "oq-qora",
        },
        {
          kanji: "面白い",
          kana: "おもしろい",
          mean_ru: "интересный",
          mean_uz: "qiziqarli",
        },
      ],
      sentence: {
        jp: "このシャツ、白いのはありますか。",
        rubyData: [
          { text: "このシャツ、" },
          { kanji: "白", reading: "しろ" },
          { text: "いのはありますか。" },
        ],
        translation: {
          ru: "А есть такая же рубашка, но белая?",
          uz: "Bu ko'ylakning oq rangligisi bormi?",
        },
        grammarPoint: {
          ru: "Частица の здесь заменяет существительное (рубашку), чтобы не повторять его дважды. Гениальная грамматика для шопинга: когда просите другой цвет или размер, просто добавляете の к прилагательному.",
          uz: "の yuklamasi bu yerda otni (ko'ylakni) takrorlamaslik uchun uning o'rniga keladi. Do'konda boshqa rang yoki o'lcham so'raganda sifatga の qo'shib ishlatish juda qulay.",
        },
      },
    },
    {
      char: "百",
      onyomi: "ヒャク",
      kunyomi: "",
      meanings: {
        ru: "сто",
        uz: "yuz",
      },
      words: [
        {
          kanji: "百",
          kana: "ひゃく",
          mean_ru: "сто",
          mean_uz: "yuz",
        },
        {
          kanji: "三百",
          kana: "さんびゃく",
          mean_ru: "триста",
          mean_uz: "uch yuz",
        },
        {
          kanji: "百円玉",
          kana: "ひゃくえんだま",
          mean_ru: "монета 100 иен",
          mean_uz: "100 iyenlik tanga",
        },
      ],
      sentence: {
        jp: "すみません、百円玉が足りないので両替できますか。",
        rubyData: [
          { text: "すみません、" },
          { kanji: "百円玉", reading: "ひゃくえんだま" },
          { text: "が" },
          { kanji: "足", reading: "た" },
          { text: "りないので" },
          { kanji: "両替", reading: "りょうがえ" },
          { text: "できますか。" },
        ],
        translation: {
          ru: "Извините, мне не хватает 100-иеновых монет, не могли бы вы разменять деньги?",
          uz: "Kechirasiz, menda 100 iyenlik tangalar yetmayapti, maydalab bera olasizmi?",
        },
        grammarPoint: {
          ru: "<ruby>両替<rt>りょうがえ</rt></ruby> (размен) и <ruby>足<rt>た</rt></ruby>りない (не хватает). Вы точно скажете это в прачечной, у автоматов с игрушками (гачапон) или на парковке, если у вас только крупные купюры.",
          uz: "<ruby>両替<rt>りょうがえ</rt></ruby> (maydalash) va <ruby>足<rt>た</rt></ruby>りない (yetmayapti). Kir yuvish shoxobchalarida, o'yin avtomatlarida yoki avtoturargohda mayda pulingiz tugaganda bu ibora aniq kerak bo'ladi.",
        },
      },
    },
    {
      char: "聞",
      onyomi: "ブン, モン",
      kunyomi: "き.く, き.こえる",
      meanings: {
        ru: "слушать, спрашивать",
        uz: "eshitmoq, so'ramoq",
      },
      words: [
        {
          kanji: "聞く",
          kana: "きく",
          mean_ru: "слушать, спрашивать",
          mean_uz: "eshitmoq, so'ramoq",
        },
        {
          kanji: "新聞",
          kana: "しんぶん",
          mean_ru: "газета",
          mean_uz: "gazeta",
        },
        {
          kanji: "聞こえる",
          kana: "きこえる",
          mean_ru: "слышно",
          mean_uz: "eshitilmoq",
        },
      ],
      sentence: {
        jp: "すみません、ちょっと道を聞いてもいいですか。",
        rubyData: [
          { text: "すみません、ちょっと" },
          { kanji: "道", reading: "みち" },
          { text: "を" },
          { kanji: "聞", reading: "き" },
          { text: "いてもいいですか。" },
        ],
        translation: {
          ru: "Извините, можно спросить дорогу?",
          uz: "Kechirasiz, yo'lni so'rasam maylimi?",
        },
        grammarPoint: {
          ru: "Глагол <ruby>聞<rt>き</rt></ruby>く переводится и как «слушать», и как «спрашивать». В связке с <ruby>道<rt>みち</rt></ruby> (дорога) это означает «спрашивать дорогу». Идеально для туристов.",
          uz: "<ruby>聞<rt>き</rt></ruby>く fe'li ham «eshitmoq», ham «so'ramoq» deb tarjima qilinadi. <ruby>道<rt>みち</rt></ruby> (yo'l) so'zi bilan kelganda «yo'lni so'rash» degan ma'noni beradi. Turistlar uchun ayni muddao.",
        },
      },
    },
    {
      char: "行",
      onyomi: "コウ, ギョウ",
      kunyomi: "い.く, ゆ.く",
      meanings: {
        ru: "идти",
        uz: "bormoq",
      },
      words: [
        {
          kanji: "行く",
          kana: "いく",
          mean_ru: "идти",
          mean_uz: "bormoq",
        },
        {
          kanji: "銀行",
          kana: "ぎんこう",
          mean_ru: "банк",
          mean_uz: "bank",
        },
        {
          kanji: "旅行",
          kana: "りょこう",
          mean_ru: "путешествие",
          mean_uz: "sayohat",
        },
      ],
      sentence: {
        jp: "明日、銀行でお金をおろしてから買い物に行きます。",
        rubyData: [
          { kanji: "明日", reading: "あした" },
          { text: "、" },
          { kanji: "銀行", reading: "ぎんこう" },
          { text: "でお" },
          { kanji: "金", reading: "かね" },
          { text: "をおろしてから" },
          { kanji: "買", reading: "か" },
          { text: "い" },
          { kanji: "物", reading: "もの" },
          { text: "に" },
          { kanji: "行", reading: "い" },
          { text: "きます。" },
        ],
        translation: {
          ru: "Завтра сниму деньги в банке, а после этого пойду за покупками.",
          uz: "Ertaga bankdan pul yechib olib, keyin xaridga boraman.",
        },
        grammarPoint: {
          ru: "Форма 〜てから означает «после того как». Удобно описывать цепочку планов на день: сначала снимаю деньги (お金をおろす), потом иду в магазин.",
          uz: "〜てから shakli «...dan keyin» degan ma'noni bildiradi. Kundalik rejalarni ketma-ket tushuntirishda qulay: oldin pul yechaman, keyin do'konga boraman.",
        },
      },
    },
    {
      char: "西",
      onyomi: "セイ, サイ",
      kunyomi: "にし",
      meanings: {
        ru: "запад",
        uz: "g'arb",
      },
      words: [
        {
          kanji: "西",
          kana: "にし",
          mean_ru: "запад",
          mean_uz: "g'arb",
        },
        {
          kanji: "西口",
          kana: "にしぐち",
          mean_ru: "западный выход",
          mean_uz: "g'arbiy chiqish",
        },
        {
          kanji: "関西",
          kana: "かんさい",
          mean_ru: "Кансай (регион Осаки)",
          mean_uz: "Kansay (Osaka hududi)",
        },
      ],
      sentence: {
        jp: "バス乗り場は、西口を出てすぐのところにあります。",
        rubyData: [
          { text: "バス" },
          { kanji: "乗", reading: "の" },
          { text: "り" },
          { kanji: "場", reading: "ば" },
          { text: "は、" },
          { kanji: "西口", reading: "にしぐち" },
          { text: "を" },
          { kanji: "出", reading: "で" },
          { text: "てすぐのところにあります。" },
        ],
        translation: {
          ru: "Автобусная остановка находится прямо сразу после того, как выйдете из западного выхода.",
          uz: "Avtobus bekati g'arbiy chiqishdan chiqishingiz bilan darhol ko'rinadigan joyda joylashgan.",
        },
        grammarPoint: {
          ru: "Слово すぐ (сразу) усиливает местоположение. すぐのところ значит не просто «рядом», а «вот прямо тут, перед самым носом».",
          uz: "すぐ (darhol/to'g'ri) so'zi joylashuvni kuchaytiradi. すぐのところ degani shunchaki «yaqinda» emas, balki «xuddi shu yerda, shundoqqina oldida» deganidir.",
        },
      },
    },
    {
      char: "見",
      onyomi: "ケン",
      kunyomi: "み.る, み.える",
      meanings: {
        ru: "видеть, смотреть",
        uz: "ko'rmoq, qaramoq",
      },
      words: [
        {
          kanji: "見る",
          kana: "みる",
          mean_ru: "смотреть",
          mean_uz: "ko'rmoq",
        },
        {
          kanji: "見える",
          kana: "みえる",
          mean_ru: "видно",
          mean_uz: "ko'rinmoq",
        },
        {
          kanji: "花見",
          kana: "はなみ",
          mean_ru: "любование сакурой",
          mean_uz: "sakura tomoshasi",
        },
      ],
      sentence: {
        jp: "すみません、メニューを見せてもらえますか。",
        rubyData: [
          { text: "すみません、メニューを" },
          { kanji: "見", reading: "み" },
          { text: "せてもらえますか。" },
        ],
        translation: {
          ru: "Извините, не могли бы вы показать мне меню?",
          uz: "Kechirasiz, menyuni ko'rsata olasizmi?",
        },
        grammarPoint: {
          ru: "〜てもらえますか — это вежливая просьба, звучит лучше, чем просто 〜てください. В ресторане или магазине эта фраза откроет вам любые двери.",
          uz: "〜てもらえますか — xushmuomala iltimos, shunchaki 〜てください deyishdan ko'ra ancha hurmatli eshitiladi. Restoran yoki do'konda bu gap sizga juda qo'l keladi.",
        },
      },
    },
    {
      char: "話",
      onyomi: "ワ",
      kunyomi: "はな.す, はなし",
      meanings: {
        ru: "говорить, разговор",
        uz: "gapirmoq, suhbat",
      },
      words: [
        {
          kanji: "話す",
          kana: "はなす",
          mean_ru: "разговаривать",
          mean_uz: "gapirmoq",
        },
        {
          kanji: "話",
          kana: "はなし",
          mean_ru: "разговор, история",
          mean_uz: "gap, hikoya",
        },
        {
          kanji: "電話",
          kana: "でんわ",
          mean_ru: "телефон",
          mean_uz: "telefon",
        },
      ],
      sentence: {
        jp: "ごめん、今少し電話で話せる？",
        rubyData: [
          { text: "ごめん、" },
          { kanji: "今", reading: "いま" },
          { kanji: "少", reading: "すこ" },
          { text: "し" },
          { kanji: "電話", reading: "でんわ" },
          { text: "で" },
          { kanji: "話", reading: "はな" },
          { text: "せる？" },
        ],
        translation: {
          ru: "Прости, можешь сейчас немного поговорить по телефону?",
          uz: "Kechirasan, hozir telefonda ozroq gapirolasanmi?",
        },
        grammarPoint: {
          ru: "<ruby>話<rt>はな</rt></ruby>せる (можешь говорить) — это потенциальная форма от <ruby>話<rt>はな</rt></ruby>す. Если звоните другу или коллеге без предупреждения, всегда начинайте с этого вопроса.",
          uz: "<ruby>話<rt>はな</rt></ruby>せる (gapirolasanmi) — <ruby>話<rt>はな</rt></ruby>す fe'lining imkoniyat shakli. Do'stingizga yoki hamkasbingizga to'satdan qo'ng'iroq qilganda, har doim shu savol bilan boshlang.",
        },
      },
    },
    {
      char: "語",
      onyomi: "ゴ",
      kunyomi: "かた.る",
      meanings: {
        ru: "язык, слово",
        uz: "til, so'z",
      },
      words: [
        {
          kanji: "日本語",
          kana: "にほんご",
          mean_ru: "японский язык",
          mean_uz: "yapon tili",
        },
        {
          kanji: "英語",
          kana: "えいご",
          mean_ru: "английский язык",
          mean_uz: "ingliz tili",
        },
        {
          kanji: "単語",
          kana: "たんご",
          mean_ru: "слово (лексика)",
          mean_uz: "so'z (lug'at)",
        },
      ],
      sentence: {
        jp: "英語で対応できるスタッフはいますか。",
        rubyData: [
          { kanji: "英語", reading: "えいご" },
          { text: "で" },
          { kanji: "対応", reading: "たいおう" },
          { text: "できるスタッフはいますか。" },
        ],
        translation: {
          ru: "У вас есть персонал, который может обслужить на английском?",
          uz: "Ingliz tilida xizmat ko'rsata oladigan xodim bormi?",
        },
        grammarPoint: {
          ru: "Частица で означает средство (с помощью языка). Фраза <ruby>対応<rt>たいおう</rt></ruby>できる (может обслужить) пригодится в банках, клиниках и мэрии, если вашего японского пока не хватает.",
          uz: "で yuklamasi vositani (til orqali) bildiradi. <ruby>対応<rt>たいおう</rt></ruby>できる (xizmat ko'rsata oladigan) iborasi yapon tilingiz yetmayotganda bank, shifoxona va hokimiyatlarda juda asqotadi.",
        },
      },
    },
    {
      char: "読",
      onyomi: "ドク, トク",
      kunyomi: "よ.む",
      meanings: {
        ru: "читать",
        uz: "o'qimoq",
      },
      words: [
        {
          kanji: "読む",
          kana: "よむ",
          mean_ru: "читать",
          mean_uz: "o'qimoq",
        },
        {
          kanji: "読書",
          kana: "どくしょ",
          mean_ru: "чтение",
          mean_uz: "kitob o'qish",
        },
        {
          kanji: "読み方",
          kana: "よみかた",
          mean_ru: "способ чтения",
          mean_uz: "o'qilish usuli",
        },
      ],
      sentence: {
        jp: "すみません、この漢字の読み方を教えてください。",
        rubyData: [
          { text: "すみません、この" },
          { kanji: "漢字", reading: "かんじ" },
          { text: "の" },
          { kanji: "読", reading: "よ" },
          { text: "み" },
          { kanji: "方", reading: "かた" },
          { text: "を" },
          { kanji: "教", reading: "おし" },
          { text: "えてください。" },
        ],
        translation: {
          ru: "Пожалуйста, подскажите, как читается этот кандзи.",
          uz: "Iltimos, bu kanjining o'qilishini aytib yuboring.",
        },
        grammarPoint: {
          ru: "Суффикс 〜<ruby>方<rt>かた</rt></ruby> прибавляется к основе глагола и означает «способ делать что-то». <ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby> = как читать, <ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby> = как готовить. Очень полезно для учёбы.",
          uz: "〜<ruby>方<rt>かた</rt></ruby> qo'shimchasi fe'l asosiga qo'shilib «biror narsani qilish usuli» degan ma'noni beradi. <ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby> = qanday o'qish, <ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby> = qanday tayyorlash. O'rganishda juda foydali.",
        },
      },
    },
    {
      char: "車",
      onyomi: "シャ",
      kunyomi: "くるま",
      meanings: {
        ru: "машина",
        uz: "mashina",
      },
      words: [
        {
          kanji: "車",
          kana: "くるま",
          mean_ru: "машина",
          mean_uz: "mashina",
        },
        {
          kanji: "電車",
          kana: "でんしゃ",
          mean_ru: "поезд",
          mean_uz: "poyezd",
        },
        {
          kanji: "自転車",
          kana: "じてんしゃ",
          mean_ru: "велосипед",
          mean_uz: "velosiped",
        },
      ],
      sentence: {
        jp: "駐車禁止なので、ここに車を止めないでください。",
        rubyData: [
          { kanji: "駐車禁止", reading: "ちゅうしゃきんし" },
          { text: "なので、ここに" },
          { kanji: "車", reading: "くるま" },
          { text: "を" },
          { kanji: "止", reading: "と" },
          { text: "めないでください。" },
        ],
        translation: {
          ru: "Здесь парковка запрещена, поэтому, пожалуйста, не оставляйте тут машину.",
          uz: "Bu yerda mashina qo'yish taqiqlangan, iltimos, mashinani to'xtatmang.",
        },
        grammarPoint: {
          ru: "〜ないでください — это вежливый, но строгий запрет. Вы часто увидите или услышите эту форму в контексте правил: не парковаться, не курить, не входить.",
          uz: "〜ないでください — xushmuomala, lekin qat'iy taqiq. Bu formani qoidalar kontekstida ko'p ko'rasiz: mashina qo'ymang, chekmang, kirmang.",
        },
      },
    },
    {
      char: "金",
      onyomi: "キン, コン",
      kunyomi: "かね",
      meanings: {
        ru: "деньги, золото",
        uz: "pul, oltin",
      },
      words: [
        {
          kanji: "お金",
          kana: "おかね",
          mean_ru: "деньги",
          mean_uz: "pul",
        },
        {
          kanji: "現金",
          kana: "げんきん",
          mean_ru: "наличные",
          mean_uz: "naqd pul",
        },
        {
          kanji: "金曜日",
          kana: "きんようび",
          mean_ru: "пятница",
          mean_uz: "juma",
        },
      ],
      sentence: {
        jp: "現金でお支払いですか、それともカードですか。",
        rubyData: [
          { kanji: "現金", reading: "げんきん" },
          { text: "でお" },
          { kanji: "支払", reading: "しはら" },
          { text: "いですか、それともカードですか。" },
        ],
        translation: {
          ru: "Будете платить наличными или картой?",
          uz: "Naqd pul bilan to'laysizmi yoki karta bilanmi?",
        },
        grammarPoint: {
          ru: "Слово それとも (или) используется, когда вы предлагаете выбрать между двумя вариантами. Это самая частая фраза на кассе в Японии.",
          uz: "それとも (yoki) so'zi ikkita variantdan birini tanlashni so'raganda ishlatiladi. Bu Yaponiyadagi kassalarda eng ko'p aytiladigan gapdir.",
        },
      },
    },
    {
      char: "長",
      onyomi: "チョウ",
      kunyomi: "なが.い",
      meanings: {
        ru: "длинный, главный",
        uz: "uzun, rahbar",
      },
      words: [
        {
          kanji: "長い",
          kana: "ながい",
          mean_ru: "длинный",
          mean_uz: "uzun",
        },
        {
          kanji: "店長",
          kana: "てんちょう",
          mean_ru: "менеджер магазина",
          mean_uz: "do'kon boshlig'i",
        },
        {
          kanji: "社長",
          kana: "しゃちょう",
          mean_ru: "директор компании",
          mean_uz: "kompaniya direktori",
        },
      ],
      sentence: {
        jp: "店長、来週のシフトについて相談があります。",
        rubyData: [
          { kanji: "店長", reading: "てんちょう" },
          { text: "、" },
          { kanji: "来週", reading: "らいしゅう" },
          { text: "のシフトについて" },
          { kanji: "相談", reading: "そうだん" },
          { text: "があります。" },
        ],
        translation: {
          ru: "Менеджер, я хотел бы обсудить с вами график на следующую неделю.",
          uz: "Boshliq, kelasi haftaning smenasi bo'yicha maslahatlashmoqchi edim.",
        },
        grammarPoint: {
          ru: "Конструкция 〜について означает «насчёт / по поводу». Очень деловой и правильный способ подойти к начальнику с вопросом по расписанию.",
          uz: "〜について qurilmasi «haqida / bo'yicha» degan ma'noni beradi. Boshliqqa ish jadvali bo'yicha murojaat qilishning juda to'g'ri va professional usuli.",
        },
      },
    },
    {
      char: "間",
      onyomi: "カン, ケン",
      kunyomi: "あいだ, ま",
      meanings: {
        ru: "промежуток, между",
        uz: "oraliq, o'rtasida",
      },
      words: [
        {
          kanji: "時間",
          kana: "じかん",
          mean_ru: "время",
          mean_uz: "vaqt",
        },
        {
          kanji: "間に合う",
          kana: "まにあう",
          mean_ru: "успеть",
          mean_uz: "ulgurmoq",
        },
        {
          kanji: "間",
          kana: "あいだ",
          mean_ru: "между",
          mean_uz: "orasida",
        },
      ],
      sentence: {
        jp: "急がないと、最終電車に間に合いませんよ。",
        rubyData: [
          { kanji: "急", reading: "いそ" },
          { text: "がないと、" },
          { kanji: "最終電車", reading: "さいしゅうでんしゃ" },
          { text: "に" },
          { kanji: "間", reading: "ま" },
          { text: "に" },
          { kanji: "合", reading: "あ" },
          { text: "いませんよ。" },
        ],
        translation: {
          ru: "Если не поторопимся, не успеем на последний поезд!",
          uz: "Tezlashmasak, oxirgi poyezdga ulgurmaymiz!",
        },
        grammarPoint: {
          ru: "Глагол <ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う (успевать) — супер-полезный. С частицей に он показывает, *куда* вы успеваете: на поезд, на встречу, к дедлайну. Форма 〜ないと означает «если не (поторопимся)».",
          uz: "<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う (ulgurmoq) — juda kerakli fe'l. に yuklamasi bilan *qayerga* ulgurishni ko'rsatadi: poyezdga, uchrashuvga yoki muddatga. 〜ないと shakli esa «agar (shoshilmasak)» degan ma'noni bildiradi.",
        },
      },
    },
    {
      char: "雨",
      onyomi: "ウ",
      kunyomi: "あめ",
      meanings: {
        ru: "дождь",
        uz: "yomg'ir",
      },
      words: [
        {
          kanji: "雨",
          kana: "あめ",
          mean_ru: "дождь",
          mean_uz: "yomg'ir",
        },
        {
          kanji: "大雨",
          kana: "おおあめ",
          mean_ru: "ливень",
          mean_uz: "kuchli yomg'ir",
        },
        {
          kanji: "梅雨",
          kana: "つゆ",
          mean_ru: "сезон дождей",
          mean_uz: "yomg'irlar mavsumi",
        },
      ],
      sentence: {
        jp: "突然雨が降ってきたので、コンビニで傘を買いました。",
        rubyData: [
          { kanji: "突然", reading: "とつぜん" },
          { kanji: "雨", reading: "あめ" },
          { text: "が" },
          { kanji: "降", reading: "ふ" },
          { text: "ってきたので、コンビニで" },
          { kanji: "傘", reading: "かさ" },
          { text: "を" },
          { kanji: "買", reading: "か" },
          { text: "いました。" },
        ],
        translation: {
          ru: "Внезапно пошёл дождь, поэтому я купил зонтик в комбини.",
          uz: "To'satdan yomg'ir yog'ib qoldi, shuning uchun kombinida soyabon sotib oldim.",
        },
        grammarPoint: {
          ru: "Форма 〜てくる (<ruby>降<rt>ふ</rt></ruby>ってくる) показывает, что действие началось и направлено к вам. Дождь пошёл внезапно, словно «пришёл» на вас.",
          uz: "〜てくる (<ruby>降<rt>ふ</rt></ruby>ってくる) shakli harakatning kutilmaganda boshlangani va sizga tomon yo'nalganini ko'rsatadi. Yomg'ir xuddi siz tomonga yog'ib kelgandek.",
        },
      },
    },
    {
      char: "電",
      onyomi: "デン",
      kunyomi: "",
      meanings: {
        ru: "электричество",
        uz: "elektr",
      },
      words: [
        {
          kanji: "電車",
          kana: "でんしゃ",
          mean_ru: "поезд",
          mean_uz: "poyezd",
        },
        {
          kanji: "電気",
          kana: "でんき",
          mean_ru: "электричество, свет",
          mean_uz: "elektr, chiroq",
        },
        {
          kanji: "電話",
          kana: "でんわ",
          mean_ru: "телефон",
          mean_uz: "telefon",
        },
      ],
      sentence: {
        jp: "部屋を出る時は、必ず電気を消してください。",
        rubyData: [
          { kanji: "部屋", reading: "へや" },
          { text: "を" },
          { kanji: "出", reading: "で" },
          { text: "る" },
          { kanji: "時", reading: "とき" },
          { text: "は、" },
          { kanji: "必", reading: "かなら" },
          { text: "ず" },
          { kanji: "電気", reading: "でんき" },
          { text: "を" },
          { kanji: "消", reading: "け" },
          { text: "してください。" },
        ],
        translation: {
          ru: "Выходя из комнаты, обязательно выключайте свет.",
          uz: "Xonadan chiqayotganda, albatta chiroqni o'chiring.",
        },
        grammarPoint: {
          ru: "Слово <ruby>電気<rt>でんき</rt></ruby> в быту означает просто «свет». Выключить свет = <ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>す. Слово <ruby>必<rt>かなら</rt></ruby>ず (обязательно) придаёт фразе вид чёткого правила, которое часто можно встретить в гестхаусах.",
          uz: "<ruby>電気<rt>でんき</rt></ruby> so'zi kundalik hayotda «chiroq» ma'nosini bildiradi. Chiroqni o'chirish = <ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>す. <ruby>必<rt>かなら</rt></ruby>ず (albatta) so'zi bu gapni qat'iy qoidaga aylantiradi.",
        },
      },
    },
    {
      char: "食",
      onyomi: "ショク",
      kunyomi: "た.べる",
      meanings: {
        ru: "есть, еда",
        uz: "yemoq, ovqat",
      },
      words: [
        {
          kanji: "食べる",
          kana: "たべる",
          mean_ru: "кушать",
          mean_uz: "yemoq",
        },
        {
          kanji: "食べ物",
          kana: "たべもの",
          mean_ru: "еда",
          mean_uz: "ovqat",
        },
        {
          kanji: "食堂",
          kana: "しょくどう",
          mean_ru: "столовая",
          mean_uz: "oshxona",
        },
      ],
      sentence: {
        jp: "卵のアレルギーがあるので、これは食べられません。",
        rubyData: [
          { kanji: "卵", reading: "たまご" },
          { text: "のアレルギーがあるので、これは" },
          { kanji: "食", reading: "た" },
          { text: "べられません。" },
        ],
        translation: {
          ru: "У меня аллергия на яйца, поэтому я не могу это есть.",
          uz: "Tuxumga allergiyam bor, shuning uchun buni yeyolmayman.",
        },
        grammarPoint: {
          ru: "Отрицательно-потенциальная форма <ruby>食<rt>た</rt></ruby>べられない (не могу есть) — жизненно важная фраза. Идеально для объяснения диет, аллергий или религиозных ограничений.",
          uz: "Bo'lishsiz-imkoniyat shakli <ruby>食<rt>た</rt></ruby>べられない (yeyolmayman) — hayotiy muhim ibora. Allergiya, dieta yoki diniy cheklovlarni tushuntirish uchun ishlatiladi.",
        },
      },
    },
    {
      char: "高",
      onyomi: "コウ",
      kunyomi: "たか.い",
      meanings: {
        ru: "высокий, дорогой",
        uz: "baland, qimmat",
      },
      words: [
        {
          kanji: "高い",
          kana: "たかい",
          mean_ru: "высокий, дорогой",
          mean_uz: "baland, qimmat",
        },
        {
          kanji: "高校",
          kana: "こうこう",
          mean_ru: "старшая школа",
          mean_uz: "yuqori maktab",
        },
        {
          kanji: "最高",
          kana: "さいこう",
          mean_ru: "лучший, супер",
          mean_uz: "eng zo'r",
        },
      ],
      sentence: {
        jp: "このパソコンはすごく高いけど、仕事に必要なんです。",
        rubyData: [
          { text: "このパソコンはすごく" },
          { kanji: "高", reading: "たか" },
          { text: "いけど、" },
          { kanji: "仕事", reading: "しごと" },
          { text: "に" },
          { kanji: "必要", reading: "ひつよう" },
          { text: "なんです。" },
        ],
        translation: {
          ru: "Этот компьютер очень дорогой, но он необходим мне для работы.",
          uz: "Bu kompyuter juda qimmat, lekin ishim uchun menga kerak.",
        },
        grammarPoint: {
          ru: "Окончание 〜なんです не переводится дословно, но оно добавляет эмоцию объяснения. Вы словно оправдываетесь: «Да, дорого, но это для дела!»",
          uz: "〜なんです qo'shimchasi so'zma-so'z tarjima qilinmaydi, lekin u tushuntirish emotsiyasini beradi. Xuddi o'zingizni oqlayotgandeksiz: «Ha, qimmat, lekin ish uchun!»",
        },
      },
    },
];

const uiTexts = {
  ru: {
    appTitle: "Мастер Кандзи N5",
    welcomeTitle: "Добро Пожаловать",
    welcomeText: "Изучайте и Практикуйте Кандзи",
    refBtn: "Справочник",
    quizBtn: "Тестирование",
    backBtn: "Назад",
    exitBtn: "Выйти",
    modeSelectTitle: "Настройки Теста",
    modeTitle: "Режим",
    countTitle: "Количество Вопросов",
    modeReading: "Кандзи → Чтение",
    modeMeaning: "Кандзи → Значение",
    modeMixed: "Смешанный Режим",
    countAll: "Все",
    startBtn: "Начать Тест",
    correct: "Верно!",
    incorrect: "Неверно",
    nextBtn: "Следующий Вопрос",
    closeBtn: "Закрыть",
    restartBtn: "В Главное Меню",
    vocabTitle: "Словарь",
    grammarTitle: "Грамматика",
    meaningLabel: "Значение",
    sentenceLabel: "Пример",
    questionReading: "Выберите Чтение",
    questionMeaning: "Выберите Значение",
    questionOnyomi: "Выберите Чтение (Он)",
    questionKunyomi: "Выберите Чтение (Кун)",
    resultsLabel: "Правильных Ответов",
    excellentResult: "Превосходно! ✨",
    goodResult: "Отличный Результат!",
    okResult: "Хорошо, Продолжайте!",
    needPractice: "Нужна Практика",
    exitConfirm: "Выйти из Теста? Прогресс Будет Потерян.",
    mistakesTitle: "Работа над Ошибками",
    insufficientQuestions:
      "Не Удалось Собрать Достаточно Вопросов для Выбранного Режима.",
    onyomiLabel: "ОНЪЁМИ",
    kunyomiLabel: "КУНЪЁМИ",
  },
  uz: {
    appTitle: "Master Kanji N5",
    welcomeTitle: "Xush Kelibsiz",
    welcomeText: "Kanjilarni O'rganing va Mashq Qiling",
    refBtn: "Ma'lumotnoma",
    quizBtn: "Test Ishlash",
    backBtn: "Ortga",
    exitBtn: "Chiqish",
    modeSelectTitle: "Test Sozlamalari",
    modeTitle: "Rejim",
    countTitle: "Savollar Soni",
    modeReading: "Kanji → O'qilish",
    modeMeaning: "Kanji → Ma'no",
    modeMixed: "Aralash Rejim",
    countAll: "Barchasi",
    startBtn: "Testni Boshlash",
    correct: "To'g'ri!",
    incorrect: "Noto'g'ri",
    nextBtn: "Keyingi Savol",
    closeBtn: "Yopish",
    restartBtn: "Bosh Menyuga",
    vocabTitle: "Lug'at",
    grammarTitle: "Grammatika",
    meaningLabel: "Ma'no",
    sentenceLabel: "Misol",
    questionReading: "To'g'ri O'qilishni Tanlang",
    questionMeaning: "To'g'ri Ma'noni Tanlang",
    questionOnyomi: "O'qilishni Tanlang (On)",
    questionKunyomi: "O'qilishni Tanlang (Kun)",
    resultsLabel: "To'g'ri Javoblar",
    excellentResult: "Ajoyib! ✨",
    goodResult: "Zo'r Natija!",
    okResult: "Yaxshi, Davom Eting!",
    needPractice: "Mashq Kerak",
    exitConfirm: "Testdan Chiqasizmi? Natijalar Saqlanmaydi.",
    mistakesTitle: "Xatolar Ustida Ishlash",
    insufficientQuestions:
      "Tanlangan Rejim Uchun Yetarli Savollarni Tuzib Bo'lmadi.",
    onyomiLabel: "ONYOMI",
    kunyomiLabel: "KUNYOMI",
  },
};

function getSecureRandom() {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  }
  return Math.random();
}

function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(getSecureRandom() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isValidAnswerValue(value) {
  return typeof value === "string" && value.trim() !== "" && value !== "-";
}

function getAnswerValue(kanji, subtype, language) {
  const activeLanguage = language || appState.language;
  if (subtype === "onyomi") return kanji.onyomi;
  if (subtype === "kunyomi") return kanji.kunyomi;
  return kanji.meanings?.[activeLanguage] || "";
}

function sanitizeRichText(input) {
  if (!input) return "";

  const template = document.createElement("template");
  template.innerHTML = input;
  const allowedTags = new Set(["RUBY", "RT", "RB", "RP", "BR"]);

  const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(node.textContent || "");
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return document.createDocumentFragment();
    }

    if (!allowedTags.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach((child) => {
        fragment.appendChild(sanitizeNode(child));
      });
      return fragment;
    }

    const safeElement = document.createElement(node.tagName.toLowerCase());
    node.childNodes.forEach((child) => {
      safeElement.appendChild(sanitizeNode(child));
    });
    return safeElement;
  };

  const wrapper = document.createElement("div");
  template.content.childNodes.forEach((node) => {
    wrapper.appendChild(sanitizeNode(node));
  });
  return wrapper.innerHTML;
}

function isLanguageSwitchLocked() {
  return (
    appState.currentScreen === "quiz" || appState.currentScreen === "results"
  );
}

const kanjiDataList = kanjiData.filter(
  (kanji) =>
    kanji &&
    typeof kanji.char === "string" &&
    kanji.char.trim() !== "" &&
    kanji.meanings &&
    typeof kanji.meanings === "object",
);

const kanjiIndexMap = new Map();
kanjiDataList.forEach((kanji, index) => {
  kanjiIndexMap.set(kanji.char, index);
});

const screenMap = {
  home: "homeScreen",
  reference: "referenceScreen",
  quizConfig: "quizConfigScreen",
  quiz: "quizScreen",
  results: "resultsScreen",
};

const appState = {
  currentScreen: "home",
  language: "ru",
  quizMode: "reading",
  quizCount: 15,
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
  isReferenceModal: false,
  timerInterval: null,
  isAnswering: false,
};

const DOM = {
  get langSwitch() {
    return document.getElementById("langSwitch");
  },
  get appTitle() {
    return document.getElementById("appTitle");
  },
  get progressFill() {
    return document.getElementById("progressFill");
  },
  get progressText() {
    return document.getElementById("progressText");
  },
  get scoreText() {
    return document.getElementById("scoreText");
  },
  get questionType() {
    return document.getElementById("questionType");
  },
  get questionKanji() {
    return document.getElementById("questionKanji");
  },
  get optionsGrid() {
    return document.getElementById("optionsGrid");
  },
  get detailModal() {
    return document.getElementById("detailModal");
  },
  get detailModalContent() {
    return document.getElementById("detailModalContent");
  },
  get closeModalBtn() {
    return document.getElementById("closeModalBtn");
  },
  get modalKanji() {
    return document.getElementById("modalKanji");
  },
  get modalOnyomi() {
    return document.getElementById("modalOnyomi");
  },
  get modalKunyomi() {
    return document.getElementById("modalKunyomi");
  },
  get modalMeaning() {
    return document.getElementById("modalMeaning");
  },
  get modalWords() {
    return document.getElementById("modalWords");
  },
  get modalSentenceRuby() {
    return document.getElementById("modalSentenceRuby");
  },
  get modalSentenceTranslation() {
    return document.getElementById("modalSentenceTranslation");
  },
  get modalGrammar() {
    return document.getElementById("modalGrammar");
  },
  get nextBtn() {
    return document.getElementById("nextBtn");
  },
  get closeRefBtn() {
    return document.getElementById("closeRefBtn");
  },
  get resultBadge() {
    return document.getElementById("resultBadge");
  },
  get resultBadgeText() {
    return document.getElementById("resultBadgeText");
  },
  get kanjiGrid() {
    return document.getElementById("kanjiGrid");
  },
  get countGrid() {
    return document.getElementById("countGrid");
  },
  get startBtn() {
    return document.getElementById("startBtn");
  },
  get resultsHomeBtn() {
    return document.getElementById("resultsHomeBtn");
  },
  get referenceBackBtn() {
    return document.getElementById("referenceBackBtn");
  },
  get configBackBtnTrigger() {
    return document.getElementById("configBackBtnTrigger");
  },
  get quizBackBtnTrigger() {
    return document.getElementById("quizBackBtnTrigger");
  },
};

function init() {
  setupEventListeners();
  updateUI();
  generateKanjiGrid();
}

function setupEventListeners() {
  DOM.langSwitch.addEventListener("click", toggleLanguage);
  DOM.startBtn.addEventListener("click", startQuiz);
  DOM.nextBtn.addEventListener("click", nextQuestion);
  DOM.closeRefBtn.addEventListener("click", () => closeModal());
  DOM.closeModalBtn.addEventListener("click", () => closeModal());
  DOM.referenceBackBtn.addEventListener("click", () => showScreen("home"));
  DOM.configBackBtnTrigger.addEventListener("click", () => showScreen("home"));
  DOM.quizBackBtnTrigger.addEventListener("click", confirmExit);
  DOM.resultsHomeBtn.addEventListener("click", returnToHome);

  document.querySelectorAll(".menu-card").forEach((card) => {
    card.addEventListener("click", () => showScreen(card.dataset.screen));
  });

  document.querySelectorAll(".mode-option").forEach((option) => {
    option.addEventListener("click", () => selectMode(option));
  });

  DOM.detailModal.addEventListener("click", (e) => {
    if (e.target === DOM.detailModal && appState.isReferenceModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      DOM.detailModal.classList.contains("active") &&
      appState.isReferenceModal
    ) {
      closeModal();
      return;
    }

    if (
      DOM.detailModal.classList.contains("active") &&
      !appState.isReferenceModal
    ) {
      if (e.key === "Enter" && !DOM.nextBtn.disabled) {
        nextQuestion();
      }
    }

    if (
      appState.currentScreen === "quiz" &&
      !DOM.detailModal.classList.contains("active")
    ) {
      const keyMap = { a: 0, b: 1, c: 2, d: 3 };
      const index = keyMap[e.key.toLowerCase()];
      if (index !== undefined) {
        const buttons = DOM.optionsGrid.querySelectorAll(".option-btn");
        if (buttons[index] && !buttons[index].disabled) {
          buttons[index].click();
        }
      }
    }
  });
}

function toggleLanguage() {
  if (isLanguageSwitchLocked()) return;

  appState.language = appState.language === "ru" ? "uz" : "ru";
  updateUI();

  if (appState.currentScreen === "reference") {
    generateKanjiGrid();
  }

  if (DOM.detailModal.classList.contains("active")) {
    const currentChar = DOM.modalKanji.textContent;
    const idx = kanjiIndexMap.get(currentChar);
    if (idx !== undefined) {
      showKanjiDetail(idx, appState.isReferenceModal);
    }
  }

  if (appState.currentScreen === "results") {
    showResults();
  }
}

function updateUI() {
  const texts = uiTexts[appState.language];
  DOM.langSwitch.textContent = appState.language === "ru" ? "UZ" : "RU";
  DOM.langSwitch.disabled = isLanguageSwitchLocked();

  DOM.appTitle.setAttribute("data-text", texts.appTitle);

  const ids = {
    appTitle: texts.appTitle,
    welcomeTitle: texts.welcomeTitle,
    welcomeText: texts.welcomeText,
    refBtnText: texts.refBtn,
    quizBtnText: texts.quizBtn,
    refBackBtn: texts.backBtn,
    configBackBtn: texts.backBtn,
    quizBackBtn: texts.exitBtn,
    modeTitle: texts.modeTitle,
    countTitle: texts.countTitle,
    modeReadingText: texts.modeReading,
    modeMeaningText: texts.modeMeaning,
    modeMixedText: texts.modeMixed,
    vocabLabel: texts.vocabTitle,
    grammarLabel: texts.grammarTitle,
    meaningLabel: texts.meaningLabel,
    sentenceLabel: texts.sentenceLabel,
    nextBtnText: texts.nextBtn,
    closeBtnText: texts.closeBtn,
    restartBtn: texts.restartBtn,
    resultsLabel: texts.resultsLabel,
    mistakesTitle: texts.mistakesTitle,
  };

  for (const [id, text] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  const startBtnSpan = DOM.startBtn.querySelector("span");
  if (startBtnSpan) startBtnSpan.textContent = texts.startBtn;

  renderCountSelector();
}

function showScreen(screenName) {
  if (appState.currentScreen === "quiz" && screenName !== "quiz") {
    clearTimer();
  }

  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));

  if (screenMap[screenName]) {
    document.getElementById(screenMap[screenName]).classList.remove("hidden");
    appState.currentScreen = screenName;
    DOM.langSwitch.disabled = isLanguageSwitchLocked();
  }
}

function generateKanjiGrid() {
  const grid = DOM.kanjiGrid;
  const fragment = document.createDocumentFragment();
  grid.innerHTML = "";

  kanjiDataList.forEach((kanji, index) => {
    const item = document.createElement("button");
    item.className = "kanji-item";
    item.type = "button";
    item.textContent = kanji.char;
    item.addEventListener("click", () => showKanjiDetail(index, true));
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);
}

function generateRubyHTML(rubyData) {
  if (!rubyData || !Array.isArray(rubyData)) return "";

  return rubyData
    .map((item) => {
      if (!item) return "";
      if (item.kanji && item.reading) {
        return `<ruby>${escapeHTML(item.kanji)}<rt>${escapeHTML(
          item.reading,
        )}</rt></ruby>`;
      }
      return escapeHTML(item.text || "");
    })
    .join("");
}

function escapeHTML(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function clearTimer() {
  if (appState.timerInterval) {
    clearInterval(appState.timerInterval);
    appState.timerInterval = null;
  }
}

function showKanjiDetail(kanjiIndex, isReference = false) {
  const kanji = kanjiDataList[kanjiIndex];
  if (!kanji) return;

  const lang = appState.language;
  const modalContent = DOM.detailModalContent;
  appState.isReferenceModal = isReference;

  DOM.modalKanji.textContent = kanji.char;
  DOM.modalOnyomi.textContent = kanji.onyomi || "—";
  DOM.modalKunyomi.textContent = kanji.kunyomi || "—";
  DOM.modalMeaning.textContent = kanji.meanings[lang] || "";

  const wordsContainer = DOM.modalWords;
  wordsContainer.innerHTML = "";

  if (kanji.words && kanji.words.length > 0) {
    const fragment = document.createDocumentFragment();
    kanji.words.forEach((word) => {
      const chip = document.createElement("div");
      chip.className = "word-chip";
      const meaning = lang === "ru" ? word.mean_ru : word.mean_uz;
      chip.innerHTML = `<span class="word-kanji"><ruby>${escapeHTML(
        word.kanji,
      )}<rt>${escapeHTML(
        word.kana,
      )}</rt></ruby></span><span class="word-meaning">${escapeHTML(
        meaning,
      )}</span>`;
      fragment.appendChild(chip);
    });
    wordsContainer.appendChild(fragment);
  } else {
    wordsContainer.innerHTML = `<div style="color:var(--ink-light); font-size:0.9rem;">—</div>`;
  }

  if (kanji.sentence) {
    DOM.modalSentenceRuby.innerHTML = generateRubyHTML(kanji.sentence.rubyData);
    DOM.modalSentenceTranslation.textContent =
      kanji.sentence.translation?.[lang] || "";

    const grammarCard = DOM.modalGrammar.closest(".grammar-card");
    if (kanji.sentence.grammarPoint?.[lang]) {
      DOM.modalGrammar.innerHTML = sanitizeRichText(
        kanji.sentence.grammarPoint[lang],
      );
      grammarCard.classList.remove("hidden");
    } else {
      grammarCard.classList.add("hidden");
    }
  } else {
    DOM.modalSentenceRuby.innerHTML = "";
    DOM.modalSentenceTranslation.textContent = "";
    DOM.modalGrammar.closest(".grammar-card").classList.add("hidden");
  }

  const badge = DOM.resultBadge;
  const nextBtn = DOM.nextBtn;
  const closeBtn = DOM.closeRefBtn;
  const closeModalBtn = DOM.closeModalBtn;

  if (isReference) {
    badge.classList.add("hidden");
    nextBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    closeModalBtn.classList.remove("hidden");
    closeModalBtn.disabled = false;
    clearTimer();
    nextBtn.disabled = false;
  } else {
    badge.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    closeModalBtn.classList.add("hidden");
    closeModalBtn.disabled = true;

    clearTimer();
    nextBtn.disabled = true;
    let timeLeft = 3;
    const originalText = uiTexts[appState.language].nextBtn;
    const nextBtnSpan = nextBtn.querySelector("span");

    nextBtnSpan.textContent = `${originalText} (${timeLeft})`;

    appState.timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        nextBtnSpan.textContent = `${originalText} (${timeLeft})`;
      } else {
        clearTimer();
        nextBtn.disabled = false;
        nextBtnSpan.textContent = originalText;
      }
    }, 1000);
  }

  modalContent.scrollTop = 0;
  DOM.detailModal.classList.add("active");
  requestAnimationFrame(() => {
    modalContent.scrollTop = 0;
  });
}

function closeModal(force = false) {
  if (!appState.isReferenceModal && !force) return;

  DOM.detailModal.classList.remove("active");
  clearTimer();
  appState.isAnswering = false;
}

function selectMode(element) {
  document.querySelectorAll(".mode-option").forEach((opt) => {
    opt.classList.remove("selected");
    opt.setAttribute("aria-pressed", "false");
  });
  element.classList.add("selected");
  element.setAttribute("aria-pressed", "true");
  appState.quizMode = element.dataset.mode;
}

function renderCountSelector() {
  const container = DOM.countGrid;
  container.innerHTML = "";
  const counts = [15, 30, 60, "all"];
  const texts = uiTexts[appState.language];

  const fragment = document.createDocumentFragment();

  counts.forEach((count) => {
    const btn = document.createElement("button");
    btn.className = "count-btn";
    btn.type = "button";

    if (count === "all") {
      btn.textContent = texts.countAll;
    } else {
      btn.textContent = count;
    }

    if (count === appState.quizCount) {
      btn.classList.add("selected");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.setAttribute("aria-pressed", "false");
    }

    const selectCount = () => {
      document.querySelectorAll(".count-btn").forEach((b) => {
        b.classList.remove("selected");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("selected");
      btn.setAttribute("aria-pressed", "true");
      appState.quizCount = count;
    };

    btn.addEventListener("click", selectCount);

    fragment.appendChild(btn);
  });

  container.appendChild(fragment);
}

function startQuiz() {
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.isAnswering = false;
  appState.questions = generateQuestions();

  if (appState.questions.length === 0) {
    alert(uiTexts[appState.language].insufficientQuestions);
    return;
  }

  showScreen("quiz");
  showQuestion();
}

function generateQuestions() {
  const questions = [];
  const shuffledKanji = fisherYatesShuffle(kanjiDataList);
  const maxCount =
    appState.quizCount === "all"
      ? shuffledKanji.length
      : Math.min(appState.quizCount, shuffledKanji.length);

  for (const kanji of shuffledKanji) {
    if (questions.length >= maxCount) break;

    let targetType = appState.quizMode;

    if (targetType === "mixed") {
      targetType = getSecureRandom() < 0.5 ? "reading" : "meaning";
    }

    let questionSubtype = "meaning";
    let answerVal = "";

    if (targetType === "reading") {
      const hasOn = isValidAnswerValue(kanji.onyomi);
      const hasKun = isValidAnswerValue(kanji.kunyomi);

      if (hasOn && hasKun) {
        questionSubtype = getSecureRandom() < 0.5 ? "onyomi" : "kunyomi";
      } else if (hasOn) {
        questionSubtype = "onyomi";
      } else if (hasKun) {
        questionSubtype = "kunyomi";
      } else {
        targetType = "meaning";
        questionSubtype = "meaning";
      }

      if (targetType === "reading") {
        answerVal = getAnswerValue(kanji, questionSubtype);
      }
    }

    if (targetType === "meaning" || questionSubtype === "meaning") {
      questionSubtype = "meaning";
      answerVal = getAnswerValue(kanji, questionSubtype);
    }

    if (!isValidAnswerValue(answerVal)) continue;

    const options = generateOptions(kanji, questionSubtype);

    if (options.length < 2) continue;

    questions.push({
      kanji,
      kanjiIndex: kanjiIndexMap.get(kanji.char),
      type: targetType,
      subtype: questionSubtype,
      options,
      correctAnswer: answerVal,
      userAnswer: null,
      isCorrect: false,
    });
  }

  return questions;
}

function generateOptions(correctKanji, subtype) {
  const options = new Set();
  const lang = appState.language;

  const correctVal = getAnswerValue(correctKanji, subtype, lang);

  if (!isValidAnswerValue(correctVal)) return [];

  options.add(correctVal);

  const otherKanji = kanjiDataList.filter((k) => k.char !== correctKanji.char);
  const shuffledOthers = fisherYatesShuffle(otherKanji);

  for (const distractorKanji of shuffledOthers) {
    if (options.size >= 4) break;

    let distractorVal = "";

    if (subtype === "onyomi") {
      distractorVal = distractorKanji.onyomi;
    } else if (subtype === "kunyomi") {
      distractorVal = distractorKanji.kunyomi;
    } else {
      distractorVal = distractorKanji.meanings[lang];
    }

    if (isValidAnswerValue(distractorVal) && !options.has(distractorVal)) {
      options.add(distractorVal);
    }
  }

  return fisherYatesShuffle([...options]);
}

function showQuestion() {
  const question = appState.questions[appState.currentQuestionIndex];
  if (!question) {
    showResults();
    return;
  }

  const texts = uiTexts[appState.language];
  const progress =
    ((appState.currentQuestionIndex + 1) / appState.questions.length) * 100;

  DOM.progressFill.style.width = `${progress}%`;
  DOM.progressText.textContent = `${
    appState.currentQuestionIndex + 1
  } / ${appState.questions.length}`;
  DOM.scoreText.textContent = appState.score;

  let typeLabel = "";
  if (question.subtype === "onyomi") {
    typeLabel = texts.questionOnyomi;
  } else if (question.subtype === "kunyomi") {
    typeLabel = texts.questionKunyomi;
  } else {
    typeLabel = texts.questionMeaning;
  }

  DOM.questionType.textContent = typeLabel;
  DOM.questionKanji.textContent = question.kanji.char;

  const optionsGrid = DOM.optionsGrid;
  optionsGrid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  const fragment = document.createDocumentFragment();

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${
      letters[index]
    }</span><span>${escapeHTML(option)}</span>`;
    btn.addEventListener("click", () => selectAnswer(option));
    fragment.appendChild(btn);
  });

  optionsGrid.appendChild(fragment);
  appState.isAnswering = false;
}

function selectAnswer(selectedOption) {
  if (appState.isAnswering) return;
  appState.isAnswering = true;

  const buttons = DOM.optionsGrid.querySelectorAll(".option-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  const question = appState.questions[appState.currentQuestionIndex];
  const isCorrect = selectedOption === question.correctAnswer;
  const texts = uiTexts[appState.language];

  question.userAnswer = selectedOption;
  question.isCorrect = isCorrect;

  if (isCorrect) appState.score++;

  const badge = DOM.resultBadge;
  const badgeText = DOM.resultBadgeText;
  const badgeIcon = badge.querySelector("i");

  badge.className = `result-badge ${isCorrect ? "correct" : "incorrect"}`;
  badgeText.textContent = isCorrect ? texts.correct : texts.incorrect;
  badgeIcon.className = isCorrect ? "fas fa-check" : "fas fa-times";

  showKanjiDetail(question.kanjiIndex, false);
}

function nextQuestion() {
  closeModal(true);
  appState.currentQuestionIndex++;

  if (appState.currentQuestionIndex >= appState.questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  const texts = uiTexts[appState.language];
  const total = appState.questions.length;
  const correct = appState.score;
  const percentage = total > 0 ? (correct / total) * 100 : 0;

  document.getElementById("correctCount").textContent = correct;
  document.getElementById("totalCount").textContent = total;

  let emoji, message;
  if (percentage >= 90) {
    emoji = "🏆";
    message = texts.excellentResult;
  } else if (percentage >= 70) {
    emoji = "🎉";
    message = texts.goodResult;
  } else if (percentage >= 50) {
    emoji = "👍";
    message = texts.okResult;
  } else {
    emoji = "📚";
    message = texts.needPractice;
  }

  document.getElementById("resultsEmoji").textContent = emoji;
  document.getElementById("resultsMessage").textContent = message;
  document.getElementById("resultsLabel").textContent = texts.resultsLabel;

  const mistakesContainer = document.getElementById("mistakesList");
  const mistakesTitle = document.getElementById("mistakesTitle");
  mistakesContainer.innerHTML = "";

  const incorrectQuestions = appState.questions.filter((q) => !q.isCorrect);

  if (incorrectQuestions.length > 0) {
    mistakesTitle.textContent = texts.mistakesTitle;
    mistakesTitle.classList.remove("hidden");
    mistakesContainer.classList.remove("hidden");

    const fragment = document.createDocumentFragment();

    incorrectQuestions.forEach((q) => {
      const item = document.createElement("div");
      item.className = "mistake-item";

      let typeLabel = "";
      if (q.subtype === "onyomi") typeLabel = texts.onyomiLabel;
      else if (q.subtype === "kunyomi") typeLabel = texts.kunyomiLabel;
      else typeLabel = texts.meaningLabel.toUpperCase();

      item.innerHTML = `
              <div class="mistake-kanji">${escapeHTML(q.kanji.char)}</div>
              <div class="mistake-details">
                <div class="mistake-label">${escapeHTML(typeLabel)}</div>
                <div class="mistake-row">
                  <span class="val-incorrect">${escapeHTML(q.userAnswer)}</span>
                  <span class="val-correct">${escapeHTML(
                    q.correctAnswer,
                  )}</span>
                </div>
              </div>
            `;
      fragment.appendChild(item);
    });

    mistakesContainer.appendChild(fragment);
  } else {
    mistakesTitle.classList.add("hidden");
    mistakesContainer.classList.add("hidden");
  }

  showScreen("results");
}

function resetQuizState() {
  clearTimer();
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.questions = [];
  appState.isAnswering = false;
  appState.isReferenceModal = false;
}

function returnToHome() {
  closeModal(true);
  resetQuizState();
  showScreen("home");
}

function confirmExit() {
  const texts = uiTexts[appState.language];
  if (confirm(texts.exitConfirm)) {
    returnToHome();
  }
}

window.addEventListener("beforeunload", () => {
  clearTimer();
});

document.addEventListener("DOMContentLoaded", init);
