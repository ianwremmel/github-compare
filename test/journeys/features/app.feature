Feature: Use the product
  As a user
  I want to compare two commits

  Scenario: Compare commits
    Given I visit the site '/'
    When I enter 'ianwremmel' in the '[placeholder="Org or Username"]' field
    And I enter 'github-compare' in the '[placeholder="Repository"]' field
    And I enter '7f68460d09e85cc307d96bd5cf1e1a3fa798f41b' in the '[placeholder="From Ref"]' field
    And I enter 'e5e2f3ed11da36f6b6a92b98dd9e27dbb6c4aae4' in the '[placeholder="To Ref"]' field
    Then I expect 'a[href="https://github.com/ianwremmel/github-compare/compare/7f68460d09e85cc307d96bd5cf1e1a3fa798f41b...e5e2f3ed11da36f6b6a92b98dd9e27dbb6c4aae4"]' to contain 'https://github.com/ianwremmel/github-compare/compare/7f68460d09e85cc307d96bd5cf1e1a3fa798f41b...e5e2f3ed11da36f6b6a92b98dd9e27dbb6c4aae4'
