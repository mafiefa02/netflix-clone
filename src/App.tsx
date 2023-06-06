// IMPORT HERE
import Navbar from "./components/Navbar"
import Billboard from "./components/Billboard"
import Gallery from "./components/Gallery"

function App() {
  const gallery1_items = [
    {
      key: 1,
      title: "Death Note",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV001g1xarsnczulP4QgAwna_3mLxLVIFBOBVXAUGh_SlrWFx9mtyypE9jtTSNsblhsqR9gHxKWY8Worm8Y9fsx635513AVXu9Q.webp?r=bc9"
    },
    {
      key: 2,
      title: "Hunter x Hunter",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe1Sn51krYD6gOHu8wF8Nt0_aXfIO5fSWmhXoZxgIy4ktpUIbmBEy7FxJ1RpensjWPlSzDr2IYNiPNUOmhp6MldYKg4JNqUTdIM.webp?r=b22"
    },
    {
      key: 3,
      title: "Hajime no Ippo",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQE0H8itp9bF00eKFpLBQnlD1tnNuO16xpqhnZ-JpwBb00ZDZWmeUmKAu4doagn-EobyVm0rV02jef4Bl0x_wTtTlNggfzfpOjQ.webp?r=98a"
    },
    {
      key: 4,
      title: "Black Clover",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYkgfeFRb2P7pJY2LScoCCDLaJXGKHAfMeCp1wweHQYoJWFRp9rpHbjRWwQuf_G7LWSk8MlF9CqL9swPEH1xI9mLfMGTIQmXeWo.webp?r=567"
    },
    {
      key: 5,
      title: "Vinland Saga",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaBQL_pq4cSDVpdpUWb5ExLewx3E_LLINkfHUx8QPmstW3zYVlolTNf48aRngig_FJkSnH8IA0vsOuwFnM68wUdnAk6bOQ-hRMcd_M3MH4cOfonaajSZ4o5yGvA9DQnreUrsEombUd83znNFHzajbLGua17skaEJP9sCb37423ox9ZC18IcppELFvJtvDgGUaObfnqtEgDystWBguyEh_xB0PN15HeVvwO07rC0ImzcRGo4GAQjUHKrZ_k3ChIio6IbIwmnECA_AWzZMpNyn5pHHQjrH1K01YPY-812j2v-Ijg4lV60Wj0h3E7KzvqR8_-gku-Tzr7L2g_1aziqClubNm1svfGvLJ2TEeSSMHSz--o5VOQzTbXLz2wXoYqjbSRJVwL9djQkU_Yc_4JdZ9M6aqYFCkw4hucuHOrmQJzmg.webp?r=65d"
    },
    {
      key: 6,
      title: "Jojo's Bizzare Adventure",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeo26eQTyK5t9xceCCE86N3JsqgZ2eCMMsHxyBzGx8UTvD8-aHTe6EAtYMbn5R4gfMWLRNbUhOZZljpBjZ8zTIiPJjt3L-3TWyKv-5fSvooKuS0sLg0v0oT9--ay1HFx3MU3.jpg?r=438"
    },
    {
      key: 7,
      title: "Hell's Paradise",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWk6ZSNGqESuhvwbkXs32JnSFdrovRvFsgSc1HeYIKLmjKqujx05UM2EdrsHkfXl19pJsK2IcKU_V6duCdYWo9lArthW5wV6vg-_z0niuFji-_tpsZa5JBxlqbODm7t_J23D5ZLdtK2Hsfbh0gBf02VDKXJrzQrZgq3TR0IDpJSb7ISsNGQld4aVWveRQnDmkJBtFpqggRzzN67rqKgZ6cNCh9ep02N1BwwA6T_QF0nPuHcIoRb5ykDGN6IbXb5x-v5n8-CxgkgmxXKJa_DgVf1bBZHDQgFs8K21fUdZFVE5EFpXb-kU1ZzDCv3636IBjsXjYvpavh0aclB_DPjor6AV8M7oo6ygsT3D26XNzbh5viLQKWhVk90pKEH6IsYQM2hbS5gjKKLYMDiYDWCJxe7tzfWTULZlHL2i79LbWjfM.webp?r=e1b"
    },
    {
      key: 8,
      title: "Haikyuu!!",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYl7lws4eKCLnBZ-Gogk9J3Mu-7TQLmIRptczKQ0rtv7h3zGpFURRJKIHwMJy-24FgdSAiSeamy79DVG4RxTk865o_IuQfllWYw.webp?r=d21"
    },
    {
      key: 9,
      title: "My Hero Academia",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSXhr3FFiyXp6py-Djbe-TMl_xUGp0uRWAYRxjr1iF1z57HcSPyfTrkUnXE0Th14oPXuqea_NEDcG1qFY1Sck9dm2j5dlOzAX_g.webp?r=924"
    },
    {
      key: 10,
      title: "Tokyo Ghoul",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWlJ2eeyWZPxkIW-_9fmMgjjgSI3w_PFk_irUwbHvNoadu27NfawousQQqLMP4umkPJG-T9FjthHIeLq69y0gWwJH0rBXiIwJnI.webp?r=067"
    },
    {
      key: 11,
      title: "Oshi no Ko",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRv9OpjRr1Ma-CwFK53rr85Vn54JcZVzfLvhCeHX6Ynhldg20NrFGh6kCFoyDbtPfOMG89lQLaBaMtuRr93agcdhYBHypGw53etazRl0jWjF1RWq3cib4_rY8XI8MqyrN0uRp6WeKvccTDHmOz2giaId7x5FlgFgqB2EH48IuZBUHINMm38aiuQQhdETWslwEODCpeS-3FNhGXnHGb8HnPMaSjqfeWE7N8rLfI3U7uqtCIneg1amTsigkP452ceMrfWSqoIDemcltdPGym1j8EbRnuQQUvHa527VON8RDygPJs9mWbRJqOurUq3mOYFOiFNnCq81smebparxHbsJHMF8uk-6zB2nO6TdMqNY0SZRfU0BnO7dhNtKvqiKDq-c48gtjf7dtXzavler3ivASzkVVuRYPPt41aw0Ezx2Z8bt.webp?r=ae0"
    },
    {
      key: 12,
      title: "The Promised Neverland",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXlzQ_D2aAjjj9N2p_UD-qB2IJai6Ja648m4d0ske_5Bc8eNhZAjoiP8TbFK_MShhGNGyP3ZTEEcqi5ow9YPPl57l7rxzV58OpI.webp?r=6b2"
    }
  ]

  const gallery2_items = [
    {
      key: 1,
      title: "The Breaking Bad",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQBfDQFgFupQYov5pQ4k1VGJIyeFjUad48qV4qajtGYE_1TyEQxrT3nToxrVvqj_mb_VcxAJPMmuPN0rO4pOYPnXNhVxOqkVjHk.webp?r=9ff"
    },
    {
      key: 2,
      title: "Alice in Borderland",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ1X1xgrABppt3AgHsoVL5Sww1vmpL8JqAqnUvupp4DPjkzCgHMKxiIzlr_DRfMrBR0b4Q86njuE_FB0wi-syGEKCNgfk2fzo3JgJZDIrP6y3WRf_wk_Lq1XgOF6MEufuiEZ.jpg?r=3bb"
    },
    {
      key: 3,
      title: "Demon Slayer",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbDD-goTJB2WdUT0JzagzuZlt3P5LOi7k2ibQNWGApC84QCbDJriCDgu4eq5giUnsl7p7JDzGya-oO876Te5Z1i7nQtS-A8zIB01ziI272BldFXviPap3o1ENVmIyHViLbN_L-TQRKeB4Srax0aemXiGcnyuYljzXUbzfdLuSGolslHaKdkzZ3ZgvSm-HlcXzMJ5V6la1gAlwftx9t8zbm_hkS-Ns9OxdZOcKwo6SR3c4XiQ44GgemSHqtLSDcw5xevWUG9gAsHa84JqUOXJMtf1stcco8M_6H9J1dfDoNl8mH3qmVWbrpjgQUwKUPv-djbVwcMJwbXs0J8ta-dc8BtQBKDRsx5UI0_sqVHeaoqDRM9LUpc-WFCVkHEuz8T-E563jQkzdoMn54Qgq9GzkDPYib9EJ5NSshNqbq8KULu1.webp?r=503"
    },
    {
      key: 4,
      title: "Blade Runner 2049",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVry-xzGqVsyk2tO_IHIiGTYnli_xxWkWSjMC2kPL3gX6dk4lwse4ORysPyKJ2i_im9lUU4_eDZpzEBe8l5nwEDEWqYUlxGRpo4.webp?r=1bb"
    },
    {
      key: 5,
      title: "Attack on Titan",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb169Wa9LLt6D4v2CCSx9PKd3ywRr-EEGAmXorgY14ymsQla444XuUWD3pVWsxTq7MSIXof20TtlbC4cZQoU4udNDUYl5YZUHY4.webp?r=fe2"
    },
    {
      key: 6,
      title: "YOU",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABToJtYj9mV22DzTl12r68LGZH97I24kkzYLlk9adKTlg8YvseeP-3dpt_85C3G-9WxkaECrfkHl2i3OITzgusxEe2sLIxU3BUCbl9VoqS7C78Sh-9S0S-pw-j6W0PZdZSlYu.jpg?r=bf7"
    },
    {
      key: 7,
      title: "Ranking of Kings",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRPOsvb2LeyfPthX4qAPC2K2AtACUJbXj1xvhVku2PgdiUfI4ts3vsEHxSVOKkuAjDIaTUegv-Q1lkpV6YY5v3nFAXQj5xw9bQEPjQHn9ERiFaOYx6UVmBGfNu_L0c4iS5Yquwd6yP0DyYfLzCuEG0TRzL4bJF4Yoxuy-y6oMf1nW2YTGrfMUX4jyRpdrxaZbBp4CJs6V0aWcGYq-zk1q3vpTcgoRqvKEAUrY1eTnW72_q4wbpcfXLfLVR5fHyB7VYi1UEVAwkfEzeO_WtXA2CX9aa-WhcgLgkqyN3LYy_NwW8LCe9SYUng53pnQe1M71lSm1eu3OVaHsf1q06IFfvs7GhcNzgSGhgTGtXefauj-CwGk3csjt519w0rg_NoykQOq9auTs5LllNY-5gQEocxjHQQm_Ln-Et1hmvYwVqTz.webp?r=ef5"
    },
    {
      key: 8,
      title: "Ozark",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c"
    },
    {
      key: 9,
      title: "One Piece",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdxl-MSGWFcrYiSklEVzvlbYML7Esu9sl4PWol1rJxzx2V031w-aqSsyjGyg-iCRJwnozfUQv5BC98ss9yXRDxqJvV-Uk4s5A5F1weBhDYqjgt_jNdX9UwvH2E0YEToJCgZDzexux8wqBdnGky45Xs2JiTeCrTG3Klqh3hdWCzYVMvSfaIirh9UnemeSO4vw29D3eDgINQQ_SV-_xHic77xe9SVLOoQBCgvVSgotbLsY_07X3bIAJ7LcLeLcAgzIky9JTtW8u1LkS1Q5tqPxB9RL.webp?r=931"
    },
    {
      key: 10,
      title: "Bungo Stray Dogs",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvIUgcKxRbdU_eegxob5GasmR9eJ0bMg3fKvjr7FQptbjq6iWQW_cu5EmZOWlYbdmqwaIGXh9J4y9NXPgA-8OsQc635o-mX-Bg.webp?r=c1d"
    },
    {
      key: 11,
      title: "Gudetama: An Eggcellent Adventure",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd46qYEXYgfLLfbxTEOKh8QpnUS61beUE-SLaCAW79xG9lYRN_pmNu-JsTKz2upx01JSQrcYJJfn17fU4K8znvdWMTSqAc0WDcuOFPJq_IFtpFVqjDFzpGv9yJiQ8ogKDxpE.jpg?r=42d"
    },
    {
      key: 12,
      title: "John Wick: Chapter 3 - Parabellum",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQOD4RcBYRJ8QdLYkQDimfDZpTIG6Jh1XixUfd92N8vCrqqBwvqd5Rz9I-QAuY3PMDmB8buk1EniGvAC9zbqUM8xEWG6MFIDqCQ.webp?r=880"
    }
  ]

  const gallery3_items = [
    {
      key: 1,
      title: "El Camino: A Breaking Bad Movie",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYkrks9p0z0zJvfQMmfG3NwPQeyo7Igh4Q0huO1MN0CpnaYTuo26PyTCnea4HZBW0RYvHTTPj3JQL7IhKlwqlVDkwK__jasDX12_iYckspK6KhvuJK0_XfBRD88t4V9Z5uyv.jpg?r=f46"
    },
    {
      key: 2,
      title: "Better Call Saul",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVUhQTOppKpeP_f2tfjdI8BBktZixd1mU4DgYOzmTKAASMF26sotQCqTX9oVz_rHad0C3gKKChAnRS9PKiZxobrxMqfHf6KRomUWNTJw107RZxjeWgE-vwzvCzvbHx9e0wnb.jpg?r=c9b"
    },
    {
      key: 3,
      title: "Manifest",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXV56PUbUGWpAG9W5rP5Dn-WufnLqdEaXYrmwKQX9bSB35Kjtqfp-42-Jw61k_ZzsswOJNbaPEE6L0jCeJsoeSO_RExBFF03wqQGiYquFxH0czYdMdh3Vc8is6V9RVEZ-hdrwGuILe2xiceLcafjjzjgmRTyBJawABKPsBH1M1PLAXWpUHFERfBibUteIZ1_q7W6k7jjBzU8Ttr3gPCy_mPwcKMW0wl-xF0jI2RBT6j9dQaMHD3sfeFkvImyO7ia08tuUgzatAVpi_Sz_QnfOD511PsVwmCBF6EEzM69CuKeE9NQTkUzWBlNdNtmys49rmM6qOX0sOUOZgt5aXXNSRobNkkiPoGt7714N_G-WGIHr6mP.jpg?r=b2d"
    },
    {
      key: 4,
      title: "Black Mirror",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfKIC2TM8bfJdce3r8pD2noD55XzT4mR2GcZhc3YAEMrRz_64awuUZXU_l3592CiNnJeyc0J_Jmj3lmnTz0WX5R8Cn-3npxsBj9j_L0hlwoxYZmXayDH-4vtY7MRnTJtvYu-.jpg?r=fb7"
    },
    {
      key: 5,
      title: "Friends: The Reunion",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdFfuoU4rnrXk50fjUjzle0OjZj8Sr40bucK1awD34hMUNwfrljs0-X52ZgBaOpgb52P9G0KZ3_VUhUb7VqJ31Fx8_pIglYJzTc.webp?r=75b"
    },
    {
      key: 6,
      title: "Beef",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQeP0WcFsus4FgegrNoUV6za7UF8WgNAfn7_dPkFYrkb0FvA9uRS5rvt1w4nC3LqQ61vxtfoqdJ6oHkyFamTtnptAcM9sd1Lz-nCu7uoiNSa6fvchKLu_76R1TfVa4ZJQ2zI.jpg?r=46d"
    },
    {
      key: 7,
      title: "Peaky Blinders",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07"
    },
    {
      key: 8,
      title: "Dr. Stone",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVfln8Supsa8yywcajRJh0cRIE8vkLuka5rkFAfAuQYbK-9salVGDUAQqYq2GBvQ40E4ZxYVvQo14-tezqwgVp45BMY496REz6ewS1vlNWQoC-JvHLceMMX9qIkELJ1hIRI2f6nqV02wETv8mFd721yfHHbvOzch1YxrHvHwsL0FQFcS02bcObr90RR4vKgHJm68VyJIrsTBBMqQSzBxPVzhfT3YEOl9rN04TYQDlmhHnBJ-xkoSa4QelN2400iOg6nYklrvX8xc4mR9XFoGtqCtyoAZT0Xq96rKp7loULrGdLJz1-2rkUU3LMHspL6RU9shAGEDDEMG1xSrH7LDus3pj77t3Dqga40j2edne_2vO06bweSvBmCBt3B4gjbnhgFvT35GQhmtfvP7FYr51vK0LPW-ZlJ9B5VF8wrz2aqy.webp?r=b74"
    },
    {
      key: 9,
      title: "Hell's Paradise",
      image: "http://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWk6ZSNGqESuhvwbkXs32JnSFdrovRvFsgSc1HeYIKLmjKqujx05UM2EdrsHkfXl19pJsK2IcKU_V6duCdYWo9lArthW5wV6vg-_z0niuFji-_tpsZa5JBxlqbODm7t_J23D5ZLdtK2Hsfbh0gBf02VDKXJrzQrZgq3TR0IDpJSb7ISsNGQld4aVWveRQnDmkJBtFpqggRzzN67rqKgZ6cNCh9ep02N1BwwA6T_QF0nPuHcIoRb5ykDGN6IbXb5x-v5n8-CxgkgmxXKJa_DgVf1bBZHDQgFs8K21fUdZFVE5EFpXb-kU1ZzDCv3636IBjsXjYvpavh0aclB_DPjor6AV8M7oo6ygsT3D26XNzbh5viLQKWhVk90pKEH6IsYQM2hbS5gjKKLYMDiYDWCJxe7tzfWTULZlHL2i79LbWjfM.webp?r=e1b"
    },
    {
      key: 10,
      title: "The Days",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdBDBRhBlwNJlBzRJN8nBxJxMPEEKFlFS85_M-f2JMTE4Zqkro5AgiCnt4U2RVr0cEihdT5TEwuJKoivdSa8rGfkWJ03Avw_t6KW53oAJiGCSZwxJYJL53vL_fNHWWOrWtoRcoYYCRBSeLx5UY4CWmgpCojQnr-RV-UDOKaUWWbOHtKIqgyqvTboB-n94yw.jpg?r=e7c"
    },
    {
      key: 11,
      title: "Chainsaw Man",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbOSfFiKRhEq3U2Tp01eDpepkgIqDQS5EIplhl_WUFYmyCRh7bqQS6EWA2nJ8KW4QiC48o_Gzp71g1dPOEMQh7CvO8-xP0xg0lU.webp?r=888"
    },
    {
      key: 12,
      title: "Stranger Things",
      image: "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdi8BJm4ikQjdPjGGMUVCMRAaLCIyXH_9DqlRHs8FxP2j7-Ax_LSsHdmoDsVkRT61sXGvJgf5YBrhsylWwh38Lv3Ib-pUkGQU1Ulh7lTbGLKyMhSsSiJ8o4v7WliowzqY0yx.jpg?r=e60"
    }
  ]

  return (
    <div className="flex flex-col z-[0] overflow-hidden">
      <Navbar />
      <Billboard />
      <Gallery items={gallery1_items} title="Anime Based on Manga" id={"1"} />
      <Gallery items={gallery2_items} title="Continue Watching on User" id={"2"} />
      <Gallery items={gallery3_items} title="Trending Now" id={"3"} />
    </div>
  )
}

export default App
