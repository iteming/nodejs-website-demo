var Pager = {
    LoadPage: function (recordCount, currentPage, CB) {
        var PageSize = 10;
        currentPage = currentPage - 1;
        $("#pagination").pagination(recordCount, {
            num_display_entries: 5,
            num_edge_entries: 0,
            items_per_page: PageSize,
            current_page: currentPage,
            callback: function (page_index, jq) {
                if (Number(page_index) != currentPage) {
                    Pager.GetData(page_index + 1);
                }
                return false;
            }
        });
    },
    GetData: function (index) {
        Pager.LoadPage(100, index);
    }
};

Pager.LoadPage(100, 1);